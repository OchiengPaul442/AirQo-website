import uuid
from django.db import models
from django.conf import settings
from cloudinary.models import CloudinaryField
from cloudinary.uploader import destroy
from backend.utils.baseModel import BaseModel


def generate_uuid():
    return uuid.uuid4().hex


# Base Model with UUID primary key
class UUIDBaseModel(BaseModel):
    id = models.CharField(
        primary_key=True, default=generate_uuid, editable=False, max_length=32
    )

    class Meta:
        abstract = True


# Tag Model
class Tag(UUIDBaseModel):
    name = models.CharField(max_length=20, null=False, blank=False)

    def __str__(self):
        return self.name


# Highlight Model
class Highlight(UUIDBaseModel):
    title = models.CharField(max_length=110)
    tags = models.ManyToManyField(Tag, related_name='highlights')

    if settings.DEBUG:
        # In development, store files locally
        image = models.FileField(
            upload_to='highlights/images/',
            null=True,
            blank=True
        )
    else:
        # In production, store files in Cloudinary
        image = CloudinaryField(
            "Image",
            overwrite=True,
            resource_type="image",
            folder="website/uploads/highlights/images",
            default='website/uploads/default_image.webp',
        )

    link = models.URLField()
    link_title = models.CharField(max_length=20, blank=True)
    order = models.IntegerField(default=1)

    class Meta:
        ordering = ['order', '-id']

    def __str__(self):
        return self.title

    def delete(self, *args, **kwargs):
        # Automatically delete the file from Cloudinary or local storage when the highlight is deleted
        if self.image:
            if not settings.DEBUG:  # In production, delete the image from Cloudinary
                public_id = self.image.public_id
                destroy(public_id)
            else:  # In development, delete the image from the local file system
                self.image.delete(save=False)
        super().delete(*args, **kwargs)
