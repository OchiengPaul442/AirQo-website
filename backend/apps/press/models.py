from django.db import models
from backend.utils.models import BaseModel
from author.decorators import with_author
from cloudinary.models import CloudinaryField


@with_author
class Press(BaseModel):
    article_title = models.CharField(max_length=100)
    article_intro = models.CharField(max_length=200, null=True, blank=True)
    article_link = models.URLField(null=True, blank=True)

    # Publication details
    date_published = models.DateField()

    # Publisher logo using Cloudinary for image storage
    publisher_logo = CloudinaryField(
        "PublisherLogo", overwrite=True, resource_type="image", null=True, blank=True
    )

    # Order field for ordering articles
    order = models.IntegerField(default=1)

    # Website category choices
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

    # Article tag choices
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

    # Meta class for model configuration
    class Meta:
        ordering = ['order', '-id']  # Order by 'order' field and reverse id

    # String representation of the Press object
    def __str__(self):
        return self.article_title
