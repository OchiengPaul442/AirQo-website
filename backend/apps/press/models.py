from django.conf import settings
from django.db import models
from backend.utils.models import BaseModel
from cloudinary.models import CloudinaryField


class Press(BaseModel):
    article_title = models.CharField(max_length=100)
    article_intro = models.CharField(max_length=200, null=True, blank=True)
    article_link = models.URLField(null=True, blank=True)

    date_published = models.DateField()

    publisher_logo = CloudinaryField(
        "PublisherLogo", overwrite=True, resource_type="image", null=True, blank=True
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
