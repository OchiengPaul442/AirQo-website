from django.conf import settings
from django.db import models
from cloudinary.models import CloudinaryField
from backend.utils.models import BaseModel


class AfricanCountry(BaseModel):
    country_name = models.CharField(max_length=100)

    if settings.DEBUG:
        country_flag = models.FileField(
            upload_to='countries/flags/',
            null=True,
            blank=True
        )
    else:
        country_flag = CloudinaryField(
            "CountryFlag", overwrite=True, resource_type="image",
            folder="website/uploads/countries/flags"
        )

    order = models.IntegerField(default=1)

    class Meta:
        ordering = ['order', '-id']

    def __str__(self):
        return self.country_name

    def get_country_flag_url(self):
        if settings.DEBUG:
            return self.country_flag.url if self.country_flag else None
        else:
            return self.country_flag.build_url(secure=True)


class City(BaseModel):
    city_name = models.CharField(max_length=100)
    order = models.IntegerField(default=1)
    african_city = models.ForeignKey(
        AfricanCountry,
        null=True,
        related_name="city",
        on_delete=models.deletion.SET_NULL,
    )

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.city_name


class Content(BaseModel):
    title = models.CharField(max_length=150)
    order = models.IntegerField(default=1)
    city = models.ForeignKey(
        City,
        null=True,
        related_name="content",
        on_delete=models.deletion.SET_NULL,
    )

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Section-{self.id}"


class Description(BaseModel):
    paragraph = models.TextField()
    order = models.IntegerField(default=1)
    content = models.ForeignKey(
        Content,
        null=True,
        blank=True,
        related_name="description",
        on_delete=models.deletion.SET_NULL,
    )

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Paragraph-{self.id}"


class Image(BaseModel):
    if settings.DEBUG:
        image = models.FileField(
            upload_to='content/images/',
            null=True,
            blank=True
        )
    else:
        image = CloudinaryField(
            "ContentImage", overwrite=True, resource_type="image",
            folder="website/uploads/content/images"
        )

    order = models.IntegerField(default=1)
    content = models.ForeignKey(
        Content,
        null=True,
        blank=True,
        related_name="image",
        on_delete=models.deletion.SET_NULL,
    )

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Image-{self.id}"

    def get_image_url(self):
        if settings.DEBUG:
            return self.image.url if self.image else None
        else:
            return self.image.build_url(secure=True)
