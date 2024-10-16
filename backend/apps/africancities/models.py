from django.db import models
import uuid
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


class AfricanCountry(UUIDBaseModel):
    country_name = models.CharField(max_length=100)
    country_flag = CloudinaryField(
        "CountryFlag", overwrite=True, resource_type="image")
    order = models.IntegerField(default=1)

    class Meta:
        ordering = ['order', '-id']

    def __str__(self):
        return self.country_name


class City(UUIDBaseModel):
    city_name = models.CharField(max_length=100)
    order = models.IntegerField(default=1)
    african_country = models.ForeignKey(
        AfricanCountry,
        null=True,
        related_name="cities",
        on_delete=models.SET_NULL,
    )

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.city_name


class Content(UUIDBaseModel):
    title = models.CharField(max_length=150)
    order = models.IntegerField(default=1)
    city = models.ForeignKey(
        City,
        null=True,
        related_name="contents",
        on_delete=models.SET_NULL,
    )

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Section-{self.id}"


class Description(UUIDBaseModel):
    paragraph = models.TextField()
    order = models.IntegerField(default=1)
    content = models.ForeignKey(
        Content,
        null=True,
        blank=True,
        related_name="descriptions",
        on_delete=models.SET_NULL,
    )

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Paragraph-{self.id}"


class Image(UUIDBaseModel):
    image = CloudinaryField(
        "ContentImage", overwrite=True, resource_type="image")
    order = models.IntegerField(default=1)
    content = models.ForeignKey(
        Content,
        null=True,
        blank=True,
        related_name="images",
        on_delete=models.SET_NULL,
    )

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Image-{self.id}"
