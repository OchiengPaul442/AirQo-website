# models.py
import uuid
from django.conf import settings
from django.db import models
from backend.utils.models import BaseModel
from cloudinary.models import CloudinaryField
from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.utils.text import slugify
# Ensure CKEditor is installed and configured
from ckeditor.fields import RichTextField


def generate_uuid():
    return uuid.uuid4().hex


# Base Model with UUID primary key
class UUIDBaseModel(BaseModel):
    id = models.CharField(
        primary_key=True, default=generate_uuid, editable=False, max_length=32
    )

    class Meta:
        abstract = True


# Event Model
class Event(UUIDBaseModel):
    title = models.CharField(max_length=100)
    title_subtext = models.CharField(max_length=90)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    start_time = models.TimeField(null=True, blank=True)
    end_time = models.TimeField(null=True, blank=True)
    registration_link = models.URLField(null=True, blank=True)
    unique_title = models.CharField(
        max_length=100, unique=True, null=True, blank=True
    )

    class WebsiteCategory(models.TextChoices):
        AirQo = "airqo", "AirQo"
        CleanAir = "cleanair", "CleanAir"

    website_category = models.CharField(
        max_length=40,
        default=WebsiteCategory.AirQo,
        choices=WebsiteCategory.choices,
        null=True,
        blank=True,
    )

    class EventTag(models.TextChoices):
        Untagged = "none", "None"
        Featured = "featured", "Featured"

    event_tag = models.CharField(
        max_length=40,
        default=EventTag.Untagged,
        choices=EventTag.choices,
        null=True,
        blank=True,
    )

    class EventCategory(models.TextChoices):
        NoneCategory = "none", "None"
        Webinar = "webinar", "Webinar"
        Workshop = "workshop", "Workshop"
        Marathon = "marathon", "Marathon"
        Conference = "conference", "Conference"
        Summit = "summit", "Summit"
        Commemoration = "commemoration", "Commemoration"
        InPerson = "in-person", "In-person"
        Hybrid = "hybrid", "Hybrid"

    event_category = models.CharField(
        max_length=40,
        default=EventCategory.NoneCategory,
        choices=EventCategory.choices,
        null=True,
        blank=True,
    )

    if settings.DEBUG:
        # In development, store files locally
        event_image = models.FileField(
            upload_to='events/images/',
            null=True,
            blank=True
        )
        background_image = models.FileField(
            upload_to='events/images/',
            null=True,
            blank=True
        )
    else:
        # In production, store files in Cloudinary
        event_image = CloudinaryField(
            "EventImage",
            overwrite=True,
            folder="website/uploads/events/images",
            resource_type="image",
        )
        background_image = CloudinaryField(
            "BackgroundImage",
            overwrite=True,
            folder="website/uploads/events/images",
            resource_type="image",
        )

    location_name = models.CharField(max_length=100, null=True, blank=True)
    location_link = models.URLField(null=True, blank=True)
    # Reverted to RichTextField for rich text capabilities
    event_details = RichTextField()
    order = models.IntegerField(default=1)

    class Meta:
        ordering = ["order", "-start_date"]

    def __str__(self):
        return self.title

    def generate_unique_title(self, postfix_index=0):
        unique_title = slugify(self.title)
        if postfix_index > 0:
            unique_title = f"{unique_title}-{postfix_index}"
        if not Event.objects.filter(unique_title=unique_title).exists():
            return unique_title
        return self.generate_unique_title(postfix_index=postfix_index + 1)


@receiver(pre_save, sender=Event)
def append_unique_title(sender, instance, **kwargs):
    if not instance.unique_title:
        instance.unique_title = instance.generate_unique_title()


# Inquiry Model
class Inquiry(UUIDBaseModel):
    inquiry = models.CharField(max_length=80)
    role = models.CharField(max_length=100, null=True, blank=True)
    email = models.EmailField()
    order = models.IntegerField(default=1)
    event = models.ForeignKey(
        Event,
        null=True,
        blank=True,
        related_name="inquiries",
        on_delete=models.SET_NULL,
    )

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return f"Inquiry - {self.inquiry}"


# Program Model
class Program(UUIDBaseModel):
    date = models.DateField()
    program_details = models.TextField(
        null=True, blank=True)  # Changed to TextField
    order = models.IntegerField(default=1)
    event = models.ForeignKey(
        Event,
        null=True,
        blank=True,
        related_name="programs",
        on_delete=models.SET_NULL,
    )

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return f"Program - {self.date}"


# Session Model
class Session(UUIDBaseModel):
    start_time = models.TimeField()
    end_time = models.TimeField()
    venue = models.CharField(max_length=80, null=True, blank=True)
    session_title = models.CharField(max_length=150)
    # Reverted to RichTextField for rich text capabilities
    session_details = RichTextField()
    order = models.IntegerField(default=1)
    program = models.ForeignKey(
        Program,
        null=True,
        blank=True,
        related_name="sessions",
        on_delete=models.SET_NULL,
    )

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return f"Session - {self.session_title}"


# PartnerLogo Model
class PartnerLogo(UUIDBaseModel):
    if settings.DEBUG:
        # In development, store files locally
        partner_logo = models.FileField(
            upload_to='events/logos/',
            null=True,
            blank=True
        )
    else:
        # In production, store files in Cloudinary
        partner_logo = CloudinaryField(
            "PartnerImage",
            overwrite=True,
            folder="website/uploads/events/logos",
            resource_type="image",
        )
    name = models.CharField(max_length=70)
    order = models.IntegerField(default=1)
    event = models.ForeignKey(
        Event,
        null=True,
        blank=True,
        related_name="partner_logos",
        on_delete=models.SET_NULL,
    )

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return f"Partner - {self.name}"


# Resource Model
class Resource(UUIDBaseModel):
    title = models.CharField(max_length=100)
    link = models.URLField(null=True, blank=True)

    if settings.DEBUG:
        # In development, store files locally
        resource = models.FileField(
            upload_to='publications/files/',
            null=True,
            blank=True
        )
    else:
        # In production, store files in Cloudinary
        resource = CloudinaryField(
            'raw',
            folder="website/uploads/events/files",
            resource_type="auto",
            null=True,
            blank=True
        )

    order = models.IntegerField(default=1)
    event = models.ForeignKey(
        Event,
        null=True,
        blank=True,
        related_name="resources",
        on_delete=models.SET_NULL,
    )

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return f"Resource - {self.title}"
