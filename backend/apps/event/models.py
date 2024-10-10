from django.db import models
from backend.utils.models import BaseModel
from cloudinary.models import CloudinaryField
from django_quill.fields import QuillField  # QuillField for Quill editor
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

    # Static folder for images for all events
    event_image = CloudinaryField(
        "EventImage", overwrite=True, resource_type="image", folder="website/uploads/events/images/"
    )
    background_image = CloudinaryField(
        "BackgroundImage", overwrite=True, resource_type="image", folder="website/uploads/events/images/"
    )
    location_name = models.CharField(max_length=100, null=True, blank=True)
    location_link = models.URLField(null=True, blank=True)

    # Replace CKEditor5Field with QuillField
    event_details = QuillField()

    order = models.IntegerField(default=1)

    class Meta:
        ordering = ['order', '-id']

    def __str__(self):
        return self.title

    def generate_unique_title(self, postfix_index=0):
        from django.utils.text import slugify
        unique_title = slugify(self.title)
        if postfix_index > 0:
            unique_title = f"{unique_title}{postfix_index}"
        if not Event.objects.filter(unique_title=unique_title).exists():
            return unique_title
        return self.generate_unique_title(postfix_index=postfix_index + 1)


@receiver(pre_save, sender=Event)
def append_short_name(sender, instance, **kwargs):
    if not instance.unique_title:
        instance.unique_title = instance.generate_unique_title()


# Refactor all other models that used CKEditor5Field to QuillField
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


class Program(BaseModel):
    date = models.DateField()

    # Replace CKEditor5Field with QuillField
    program_details = QuillField(null=True, blank=True)

    order = models.IntegerField(default=1)
    event = models.ForeignKey(
        Event, null=True, blank=True, related_name="program", on_delete=models.SET_NULL
    )

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Program - {self.date}"


class Session(BaseModel):
    start_time = models.TimeField()
    end_time = models.TimeField()
    venue = models.CharField(max_length=80, null=True, blank=True)
    session_title = models.CharField(max_length=150)

    # Replace CKEditor5Field with QuillField
    session_details = QuillField()

    order = models.IntegerField(default=1)
    program = models.ForeignKey(
        Program, null=True, blank=True, related_name="session", on_delete=models.SET_NULL
    )

    class Meta:
        ordering = ['order']


class PartnerLogo(BaseModel):
    partner_logo = CloudinaryField(
        'PartnerImage', overwrite=True, resource_type="image", folder="website/uploads/events/logos/"
    )
    name = models.CharField(max_length=70)
    order = models.IntegerField(default=1)
    event = models.ForeignKey(
        Event, null=True, blank=True, related_name="partner", on_delete=models.SET_NULL
    )

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Partner - {self.name}"


class Resource(BaseModel):
    title = models.CharField(max_length=100)
    link = models.URLField(null=True, blank=True)
    resource = CloudinaryField(
        'File', resource_type='raw', folder="website/uploads/events/resources/"
    )
    order = models.IntegerField(default=1)

    # Fix this line
    event = models.ForeignKey(
        Event, null=True, blank=True, related_name="resource", on_delete=models.SET_NULL
    )

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Resource - {self.title}"
