import uuid
from django.db import models
from django.conf import settings
from cloudinary.models import CloudinaryField
from django.db.models.signals import post_delete
from django.dispatch import receiver


def generate_uuid():
    return uuid.uuid4().hex

# Base Model with UUID primary key


class UUIDBaseModel(models.Model):
    id = models.CharField(
        primary_key=True, default=generate_uuid, editable=False, max_length=32
    )

    class Meta:
        abstract = True


class Partner(UUIDBaseModel):
    class RelationTypes(models.TextChoices):
        PARTNERSHIP = "partnership", "Partnership"
        COLLABORATION = "collaboration", "Collaboration"
        POLICY = "policy", "Policy"
        FUNDER = "funder", "Funder"
        RESEARCH = "research", "Research"
        NETWORK = "ca-network", "Clean Air Network Partner"
        SUPPORT = "ca-support", "Clean Air Supporting Partner"
        FORUM = "ca-forum", "Clean Air Policy Forum"
        PRIVATE = "ca-private-sector", "Clean Air Private Sector"

    # Conditional logic for file storage based on DEBUG setting
    if settings.DEBUG:
        partner_image = models.FileField(
            upload_to='partners/images/',
            null=True,
            blank=True
        )
        partner_logo = models.FileField(
            upload_to='partners/logos/',
            null=True,
            blank=True
        )
    else:
        partner_image = CloudinaryField(
            "PartnerImage",
            overwrite=True,
            resource_type="image",
            folder="website/uploads/partners/images",
            null=True,
            blank=True
        )
        partner_logo = CloudinaryField(
            "PartnerLogo",
            overwrite=True,
            resource_type="image",
            folder="website/uploads/partners/logos",
        )

    partner_name = models.CharField(max_length=200, null=False, blank=False)
    order = models.IntegerField(default=1)
    partner_link = models.URLField(null=True, blank=True)
    type = models.CharField(
        max_length=40, default=RelationTypes.PARTNERSHIP, choices=RelationTypes.choices, null=True, blank=True
    )

    class WebsiteCategory(models.TextChoices):
        AIRQO = "airqo", "AirQo"
        CLEANAIR = "cleanair", "CleanAir"

    website_category = models.CharField(
        max_length=40, default=WebsiteCategory.AIRQO, choices=WebsiteCategory.choices, null=True, blank=True
    )

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return f"Partner - {self.partner_name}"


class PartnerDescription(UUIDBaseModel):
    description = models.TextField(null=True, blank=True)
    order = models.IntegerField(default=1)
    partner = models.ForeignKey(
        Partner,
        null=True,
        blank=True,
        related_name="descriptions",
        on_delete=models.SET_NULL,
    )

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return f"Description {self.id}"

# Signal to delete partner_logo and partner_image when Partner is deleted


@receiver(post_delete, sender=Partner)
def delete_partner_files(sender, instance, **kwargs):
    # Handle deletion for partner_logo
    if instance.partner_logo:
        if settings.DEBUG:
            instance.partner_logo.delete(save=False)

    # Handle deletion for partner_image
    if instance.partner_image:
        if settings.DEBUG:
            instance.partner_image.delete(save=False)
