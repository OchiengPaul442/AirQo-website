# models.py

import uuid
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

# Tag Model


class Tag(UUIDBaseModel):
    name = models.CharField(max_length=20, null=False, blank=False)

    def __str__(self):
        return self.name

# Highlight Model


class Highlight(UUIDBaseModel):
    title = models.CharField(max_length=110)
    tags = models.ManyToManyField(Tag, related_name='highlights')
    image = CloudinaryField(
        "Image",
        overwrite=True,
        resource_type="image",
        folder="website/uploads/highlights/images",
    )
    link = models.URLField()
    link_title = models.CharField(max_length=20, blank=True)
    order = models.IntegerField(default=1)

    class Meta:
        ordering = ['order', '-id']

    def __str__(self):
        return self.title
