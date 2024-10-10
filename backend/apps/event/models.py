from django.db import models
from backend.utils.models import BaseModel
from cloudinary.models import CloudinaryField
from ckeditor.fields import RichTextField
from django.db.models.signals import pre_save
from django.dispatch import receiver

# Event Model


class Event(BaseModel):
    title = models.CharField(max_length=100)
    title_subtext = models.CharField(max_length=90)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    start_time = models.TimeField(null=True, blank=True)
    end_time = models.TimeField(null=True, blank=True)
    registration_link = models.URLField(null=True, blank=True)
    unique_title = models.CharField(max_length=100, null=True, blank=True)

    class WebsiteCategory(models.TextChoices):
        AirQo = "airqo", "AirQo"
        CleanAir = "cleanair", "CleanAir"

    website_category = models.CharField(
        max_length=40, default=WebsiteCategory.AirQo, choices=WebsiteCategory.choices, null=True, blank=True
    )

    def generate_unique_title(self, postfix_index=0):
        from django.utils.text import slugify
        unique_title = slugify(self.title)
        if postfix_index > 0:
            unique_title = f"{unique_title}{postfix_index}"
        if not Event.objects.filter(unique_title=unique_title).exists():
            return unique_title
        return self.generate_unique_title(postfix_index=postfix_index + 1)

    class EventTag(models.TextChoices):
        Untagged = "none", "None"
        Featured = "featured", "Featured"

    event_tag = models.CharField(
        max_length=40, default=EventTag.Untagged, choices=EventTag.choices, null=True, blank=True
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
        max_length=40, default=EventCategory.NoneCategory, choices=EventCategory.choices, null=True, blank=True
    )

    event_image = CloudinaryField(
        "EventImage", overwrite=True, folder="website/uploads/events/images", resource_type="image")
    background_image = CloudinaryField(
        "BackgroundImage", overwrite=True, folder="website/uploads/events/images", resource_type="image")
    location_name = models.CharField(max_length=100, null=True, blank=True)
    location_link = models.URLField(null=True, blank=True)
    event_details = RichTextField()  # CKEditor rich text field
    order = models.IntegerField(default=1)

    class Meta:
        ordering = ['order', '-id']

    def __str__(self):
        return self.title


@receiver(pre_save, sender=Event)
def append_short_name(sender, instance, **kwargs):
    if not instance.unique_title:
        instance.unique_title = instance.generate_unique_title()


# Inquiry Model
class Inquiry(BaseModel):
    inquiry = models.CharField(max_length=80)
    role = models.CharField(max_length=100, null=True, blank=True)
    email = models.EmailField()
    order = models.IntegerField(default=1)
    event = models.ForeignKey(
        Event, null=True, blank=True, related_name="inquiry", on_delete=models.SET_NULL
    )

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Inquiry - {self.inquiry}"


# Program Model
class Program(BaseModel):
    date = models.DateField()
    program_details = RichTextField(null=True, blank=True)
    order = models.IntegerField(default=1)
    event = models.ForeignKey(
        Event, null=True, blank=True, related_name="program", on_delete=models.SET_NULL
    )

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Program - {self.date}"


# Session Model
class Session(BaseModel):
    start_time = models.TimeField()
    end_time = models.TimeField()
    venue = models.CharField(max_length=80, null=True, blank=True)
    session_title = models.CharField(max_length=150)
    session_details = RichTextField()
    order = models.IntegerField(default=1)

    # Add the ForeignKey to Event here
    event = models.ForeignKey(
        Event, null=True, blank=True, related_name="session", on_delete=models.SET_NULL
    )

    class Meta:
        ordering = ['order']


# PartnerLogo Model
class PartnerLogo(BaseModel):
    partner_logo = CloudinaryField(
        'PartnerImage', overwrite=True, folder="website/uploads/events/logos", resource_type="image")
    name = models.CharField(max_length=70)
    order = models.IntegerField(default=1)
    event = models.ForeignKey(
        Event, null=True, blank=True, related_name="partner", on_delete=models.SET_NULL
    )

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Partner - {self.name}"


# Resource Model
class Resource(BaseModel):
    title = models.CharField(max_length=100)
    link = models.URLField(null=True, blank=True)
    resource = models.FileField(upload_to='events/', null=True, blank=True)
    order = models.IntegerField(default=1)
    event = models.ForeignKey(
        Event, null=True, blank=True, related_name="resource", on_delete=models.SET_NULL
    )

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Resource - {self.title}"
