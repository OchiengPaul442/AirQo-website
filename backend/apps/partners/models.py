# models.py

from django.db import models
from cloudinary.models import CloudinaryField
from django.db.models.signals import pre_save
from django.dispatch import receiver


class Partner(models.Model):
    class RelationTypes(models.TextChoices):
        PARTNERSHIP = "partnership", "Partnership"
        COLLABORATION = "collaboration", "Collaboration"
        POLICY = "policy", "Policy"
        FUNDER = "funder", "Funder"
        RESEARCH = "research", "Research"
        NETWORK = "ca-network", "Clean air Network Partner"
        SUPPORT = "ca-support", "Clean air Supporting Partner"
        FORUM = "ca-forum", "Clean air Policy Forum"
        PRIVATE = "ca-private-sector", "Clean air Private Sector"

    partner_image = CloudinaryField(
        "Partner Image", overwrite=True, resource_type="image", null=True, blank=True)
    partner_logo = CloudinaryField(
        "Partner Logo", overwrite=True, resource_type="image")
    partner_name = models.CharField(max_length=200)
    order = models.IntegerField(default=1)
    partner_link = models.URLField(null=True, blank=True)
    unique_title = models.CharField(
        max_length=100, unique=True, null=True, blank=True)
    type = models.CharField(
        max_length=40,
        choices=RelationTypes.choices,
        default=RelationTypes.PARTNERSHIP,
        null=True,
        blank=True
    )

    class WebsiteCategory(models.TextChoices):
        AIRQO = "airqo", "AirQo"
        CLEANAIR = "cleanair", "CleanAir"

    website_category = models.CharField(
        max_length=40,
        choices=WebsiteCategory.choices,
        default=WebsiteCategory.AIRQO,
        null=True,
        blank=True
    )

    created = models.DateTimeField(
        auto_now_add=True, editable=False, null=True, blank=True)
    modified = models.DateTimeField(
        auto_now=True, editable=False, null=True, blank=True)

    class Meta:
        ordering = ['order', 'id']

    def generate_unique_title(self, postfix_index=0):
        from django.utils.text import slugify

        unique_title = slugify(self.partner_name)
        if postfix_index > 0:
            unique_title = f"{unique_title}-{postfix_index}"

        if not Partner.objects.filter(unique_title=unique_title).exists():
            return unique_title
        else:
            return self.generate_unique_title(postfix_index=postfix_index + 1)

    def __str__(self):
        return f"Partner - {self.partner_name}"


@receiver(pre_save, sender=Partner)
def append_unique_title(sender, instance, *args, **kwargs):
    if not instance.unique_title:
        instance.unique_title = instance.generate_unique_title()


class PartnerDescription(models.Model):
    description = models.TextField(null=True, blank=True)
    order = models.IntegerField(default=1)
    partner = models.ForeignKey(
        Partner,
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
