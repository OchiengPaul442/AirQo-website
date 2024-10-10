from django.conf import settings
from django.db import models
from backend.utils.models import BaseModel
from cloudinary.models import CloudinaryField
import cloudinary.uploader


class Press(BaseModel):
    article_title = models.CharField(max_length=100)
    article_intro = models.CharField(max_length=200, null=True, blank=True)
    article_link = models.URLField(null=True, blank=True)

    date_published = models.DateField()

    # Specify the Cloudinary folder for press logos
    publisher_logo = CloudinaryField(
        "PublisherLogo", overwrite=True, resource_type="image", folder="website/uploads/press/logos", null=True, blank=True
    )

    order = models.IntegerField(default=1)

    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='created_press_articles'
    )
    modified_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='modified_press_articles'
    )

    class WebsiteCategory(models.TextChoices):
        AIRQO = "airqo", "AirQo"
        CLEAN_AIR = "cleanair", "CleanAir"

    website_category = models.CharField(
        max_length=40,
        default=WebsiteCategory.AIRQO,
        choices=WebsiteCategory.choices,
        null=True,
        blank=True
    )

    class ArticleTag(models.TextChoices):
        UNTAGGED = "none", "None"
        FEATURED = "featured", "Featured"

    article_tag = models.CharField(
        max_length=40,
        default=ArticleTag.UNTAGGED,
        choices=ArticleTag.choices,
        null=True,
        blank=True
    )

    class Meta:
        ordering = ['order', '-id']
        verbose_name = 'Press Article'
        verbose_name_plural = 'Press Articles'

    def __str__(self):
        return self.article_title

    def delete(self, *args, **kwargs):
        """
        Override the delete method to remove the associated Cloudinary file
        before deleting the Press article instance.
        """
        if self.publisher_logo:
            # CloudinaryField provides the public_id directly
            public_id = self.publisher_logo.public_id

            if public_id:
                # Delete the Cloudinary image using its public_id
                cloudinary.uploader.destroy(public_id)

        # Call the superclass delete method to delete the Press instance
        super().delete(*args, **kwargs)

    def save(self, *args, **kwargs):
        """
        Optionally override save() to update the `modified_by` field.
        """
        # Ensure the modified_by field is updated with the current user
        if not self.pk:  # Object is being created
            if not self.created_by:
                # Set the creator (This could be set from the request context)
                self.created_by = self.modified_by

        # Always update modified_by when saving
        self.modified_by = self.modified_by

        super().save(*args, **kwargs)