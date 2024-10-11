import uuid
from django.conf import settings
from django.db import models
from cloudinary.models import CloudinaryField
from backend.utils.models import BaseModel


def generate_uuid():
    return uuid.uuid4().hex


class UUIDBaseModel(BaseModel):
    id = models.CharField(
        primary_key=True, default=generate_uuid, editable=False, max_length=32
    )

    class Meta:
        abstract = True


class ExternalTeamMember(UUIDBaseModel):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)

    if settings.DEBUG:
        # Local storage in development
        picture = models.ImageField(upload_to="external_team/")
    else:
        # Cloudinary storage in production
        picture = CloudinaryField(
            "Image", overwrite=True, folder="website/uploads/externalTeam/images", resource_type="image")

    twitter = models.URLField(max_length=255, null=True, blank=True)
    linked_in = models.URLField(max_length=255, null=True, blank=True)
    order = models.IntegerField(default=1)

    class Meta:
        ordering = ['order', 'name']

    def __str__(self):
        return self.name

    # Ensure image is deleted from the correct storage when the member is deleted
    def delete(self, *args, **kwargs):
        if self.picture:
            if settings.DEBUG:
                self.picture.delete(save=False)
            else:
                public_id = self.picture.public_id
                if public_id:
                    from cloudinary.uploader import destroy as cloudinary_destroy
                    cloudinary_destroy(public_id)
        super().delete(*args, **kwargs)


class ExternalTeamMemberBiography(UUIDBaseModel):
    description = models.TextField(null=True, blank=True)
    order = models.IntegerField(default=1)
    member = models.ForeignKey(
        ExternalTeamMember,
        null=True,
        blank=True,
        related_name="descriptions",
        on_delete=models.SET_NULL,
    )

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return f"Description {self.id}"
