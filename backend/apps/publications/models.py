import uuid
from django.db import models
from cloudinary.models import CloudinaryField
from cloudinary.uploader import destroy
from backend.utils.baseModel import BaseModel
from django.conf import settings
from django.db.models.signals import post_delete
from django.dispatch import receiver

# Function to generate UUID


def generate_uuid():
    return uuid.uuid4().hex

# Base Model with UUID primary key


class UUIDBaseModel(BaseModel):
    id = models.CharField(
        primary_key=True, default=generate_uuid, editable=False, max_length=32
    )

    class Meta:
        abstract = True


class Publication(UUIDBaseModel):
    class CategoryTypes(models.TextChoices):
        Research = "research", "Research"
        Technical = "technical", "Technical"
        Policy = "policy", "Policy"
        Guide = "guide", "Guide"
        Manual = "manual", "Manual"

    title = models.CharField(max_length=255)
    authors = models.TextField(null=True, blank=True)
    link = models.URLField(null=True, blank=True)

    if settings.DEBUG:
        # In development, store files locally
        resource_file = models.FileField(
            upload_to='publications/files/',
            null=True,
            blank=True
        )
    else:
        # In production, store files in Cloudinary
        resource_file = CloudinaryField(
            'raw',
            folder="website/uploads/publications/files",
            resource_type="auto",
            null=True,
            blank=True
        )

    link_title = models.CharField(
        max_length=100, default="Read More", null=True, blank=True)
    category = models.CharField(
        max_length=40,
        default=CategoryTypes.Research,
        choices=CategoryTypes.choices,
        null=True,
        blank=True
    )
    order = models.IntegerField(default=1)

    class Meta:
        ordering = ['order', '-id']

    def __str__(self):
        return self.title

# Signal to delete the file when a Publication instance is deleted


@receiver(post_delete, sender=Publication)
def delete_resource_file(sender, instance, **kwargs):
    """
    Signal that ensures the file is deleted both locally and from Cloudinary
    when a Publication instance is deleted.
    """
    if instance.resource_file:
        if settings.DEBUG:
            # Delete local file
            instance.resource_file.delete(save=False)
        else:
            # Delete from Cloudinary
            try:
                # Extract the public ID from Cloudinary URL and delete it
                public_id = instance.resource_file.public_id
                destroy(public_id)
            except Exception as e:
                print(f"Error deleting file from Cloudinary: {e}")
