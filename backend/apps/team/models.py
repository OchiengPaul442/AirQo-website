from django.conf import settings
from django.db import models
from cloudinary.models import CloudinaryField


class Member(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    about = models.TextField(blank=True)

    if settings.DEBUG:
        picture = models.FileField(
            upload_to='members/pictures/',
            null=True,
            blank=True
        )
    else:
        picture = CloudinaryField(
            "Image", overwrite=True, resource_type="image",
            folder="website/uploads/team/members"
        )

    twitter = models.URLField(max_length=255, null=True, blank=True)
    linked_in = models.URLField(max_length=255, null=True, blank=True)
    order = models.IntegerField(default=1)
    created = models.DateTimeField(
        auto_now_add=True, editable=False, null=True, blank=True)
    modified = models.DateTimeField(
        auto_now=True, editable=False, null=True, blank=True)

    class Meta:
        ordering = ['order', 'name']

    def __str__(self):
        return self.name

    def get_picture_url(self):
        if settings.DEBUG:
            return self.picture.url if self.picture else None
        else:
            return self.picture.build_url(secure=True)


class MemberBiography(models.Model):
    description = models.TextField(null=True, blank=True)
    order = models.IntegerField(default=1)
    member = models.ForeignKey(
        Member,
        null=True,
        blank=True,
        related_name="descriptions",
        on_delete=models.SET_NULL,
    )
    created = models.DateTimeField(
        auto_now_add=True, editable=False, null=True, blank=True)
    modified = models.DateTimeField(
        auto_now=True, editable=False, null=True, blank=True)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return f"Description {self.id}"
