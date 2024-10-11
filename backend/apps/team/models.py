import uuid
from django.conf import settings
from django.db import models
from cloudinary.models import CloudinaryField
from backend.utils.models import BaseModel


def generate_uuid():
    return uuid.uuid4().hex


# Base Model with UUID primary key
class UUIDBaseModel(BaseModel):
    id = models.CharField(
        primary_key=True, default=generate_uuid, editable=False, max_length=32
    )

    class Meta:
        abstract = True


class Member(UUIDBaseModel):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    about = models.TextField(blank=True)

    if settings.DEBUG:
        # Use local file storage in development
        picture = models.ImageField(upload_to="team/")
    else:
        # Use Cloudinary for production
        picture = CloudinaryField(
            "Image", overwrite=True, folder="website/uploads/team/images", resource_type="image")

    twitter = models.URLField(max_length=255, null=True, blank=True)
    linked_in = models.URLField(max_length=255, null=True, blank=True)
    order = models.IntegerField(default=1)

    class Meta:
        ordering = ['order', 'name']

    def __str__(self):
        return self.name


class MemberBiography(UUIDBaseModel):
    description = models.TextField(null=True, blank=True)
    order = models.IntegerField(default=1)
    member = models.ForeignKey(
        Member,
        null=True,
        blank=True,
        related_name="descriptions",
        on_delete=models.SET_NULL,
    )

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return f"Description {self.id}"

    # Override delete method to delete related files from Cloudinary or local storage
    def delete(self, *args, **kwargs):
        if self.picture:
            self.picture.delete(save=False)  # Delete from Cloudinary or local
        super().delete(*args, **kwargs)
