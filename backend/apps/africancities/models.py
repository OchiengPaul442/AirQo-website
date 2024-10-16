from django.db import models
from cloudinary.models import CloudinaryField
from backend.utils.models import UUIDBaseModel

# Create your models here.


class AfricanCountry(UUIDBaseModel):
    country_name = models.CharField(max_length=100)
    country_flag = CloudinaryField(
        "CountryFlag", overwrite=True, resource_type="image", blank=True, null=True)  # Allow blank
    order = models.IntegerField(default=1)

    class Meta:
        ordering = ['order', '-id']

    def __str__(self):
        return self.country_name


class City(UUIDBaseModel):
    city_name = models.CharField(max_length=100)
    order = models.IntegerField(default=1)
    african_city = models.ForeignKey(
        AfricanCountry,
        null=True,
        related_name="city",
        on_delete=models.SET_NULL,  # Handle case where parent is deleted
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
        related_name="content",
        on_delete=models.SET_NULL,  # Handle case where parent is deleted
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
        related_name="description",
        on_delete=models.SET_NULL,  # Handle case where parent is deleted
    )

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Paragraph-{self.id}"


class Image(UUIDBaseModel):
    image = CloudinaryField("ContentImage", overwrite=True,
                            resource_type="image", blank=True, null=True)  # Allow blank
    order = models.IntegerField(default=1)
    content = models.ForeignKey(
        Content,
        null=True,
        blank=True,
        related_name="image",
        on_delete=models.SET_NULL,  # Handle case where parent is deleted
    )

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Image-{self.id}"
