# models.py
from django.db import models
from cloudinary.models import CloudinaryField
from ckeditor.fields import RichTextField  # Replaced QuillField
from django.db.models.signals import pre_save
from django.dispatch import receiver
from enum import Enum
from django.utils.text import slugify


class CleanAirResource(models.Model):
    resource_title = models.CharField(max_length=120)
    resource_link = models.URLField(null=True, blank=True)
    resource_file = models.FileField(
        upload_to='cleanair/resources/', null=True, blank=True)
    author_title = models.CharField(
        max_length=40, null=True, blank=True, default="Created By")

    class ResourceCategory(models.TextChoices):
        TOOLKIT = "toolkit", "ToolKit"
        TECHNICAL_REPORT = "technical_report", "Technical Report"
        WORKSHOP_REPORT = "workshop_report", "Workshop Report"
        RESEARCH_PUBLICATION = "research_publication", "Research Publication"

    resource_category = models.CharField(
        max_length=40,
        default=ResourceCategory.TECHNICAL_REPORT,
        choices=ResourceCategory.choices,
        null=False,
        blank=False
    )
    resource_authors = models.CharField(max_length=200, default="AirQo")
    order = models.IntegerField(default=1)

    class Meta:
        ordering = ['order', '-id']

    def __str__(self):
        return self.resource_title


class ForumEvent(models.Model):
    title = models.CharField(max_length=100, default="CLEAN-Air Forum")
    title_subtext = models.TextField(blank=True)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    start_time = models.TimeField(blank=True, null=True)
    end_time = models.TimeField(blank=True, null=True)
    introduction = RichTextField(blank=True, null=True)  # Replaced QuillField
    Speakers_text_section = RichTextField(
        blank=True, null=True)  # Replaced QuillField
    Committee_text_section = RichTextField(
        blank=True, null=True)  # Replaced QuillField
    partners_text_section = RichTextField(
        blank=True, null=True)  # Replaced QuillField
    registration_link = models.URLField(blank=True)
    schedule_details = RichTextField(
        blank=True, null=True)  # Replaced QuillField
    registration_details = RichTextField(
        blank=True, null=True)  # Replaced QuillField
    sponsorship_opportunities_about = RichTextField(
        blank=True, null=True)  # Replaced QuillField
    sponsorship_opportunities_schedule = RichTextField(
        blank=True, null=True)  # Replaced QuillField
    sponsorship_opportunities_partners = RichTextField(
        blank=True, null=True)  # Replaced QuillField
    sponsorship_packages = RichTextField(
        blank=True, null=True)  # Replaced QuillField
    travel_logistics_vaccination_details = RichTextField(
        blank=True, null=True)  # Replaced QuillField
    travel_logistics_visa_details = RichTextField(
        blank=True, null=True)  # Replaced QuillField
    travel_logistics_accommodation_details = RichTextField(
        blank=True, null=True)  # Replaced QuillField
    glossary_details = RichTextField(
        blank=True, null=True)  # Replaced QuillField
    unique_title = models.CharField(max_length=100, blank=True)
    background_image = CloudinaryField(
        "BackgroundImage", overwrite=True, resource_type="image", blank=True, null=True
    )
    location_name = models.CharField(max_length=100, blank=True)
    location_link = models.URLField(blank=True)
    order = models.IntegerField(default=1)

    class Meta:
        ordering = ['order', '-id']

    def __str__(self):
        return self.title

    def generate_unique_title(self, postfix_index=0):
        unique_title = slugify(self.title)
        if postfix_index > 0:
            unique_title = f"{unique_title}{postfix_index}"
        try:
            ForumEvent.objects.get(unique_title=unique_title)
        except ForumEvent.DoesNotExist:
            return unique_title
        else:
            postfix_index += 1
            return self.generate_unique_title(postfix_index=postfix_index)


class PartnerCategoryChoices(Enum):
    FUNDING_PARTNER = "Funding Partner"
    HOST_PARTNER = "Host Partner"
    CO_CONVENING_PARTNER = "Co-Convening Partner"
    SPONSOR_PARTNER = "Sponsor Partner"

    @classmethod
    def choices(cls):
        return [(key.value, key.name) for key in cls]


class CategoryChoices(Enum):
    SPEAKER = "Speaker"
    COMMITTEE_MEMBER = "Committee Member"
    KEY_NOTE_SPEAKER = "Key Note Speaker"
    SPEAKER_AND_COMMITTEE_MEMBER = "Speaker and Committee Member"
    COMMITTEE_MEMBER_AND_KEY_NOTE_SPEAKER = "Committee Member and Key Note Speaker"

    @classmethod
    def choices(cls):
        return [(key.value, key.name) for key in cls]


class Engagement(models.Model):
    title = models.CharField(max_length=200)
    forum_event = models.OneToOneField(
        ForumEvent,
        null=True,
        blank=True,
        related_name="engagements",
        on_delete=models.SET_NULL,
    )

    def __str__(self):
        return self.title


class Objective(models.Model):
    title = models.CharField(max_length=200)
    details = models.TextField(blank=True, null=True)
    engagement = models.ForeignKey(
        Engagement,
        null=True,
        blank=True,
        related_name="objectives",
        on_delete=models.CASCADE,
    )
    order = models.PositiveIntegerField(default=0, blank=False, null=False)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title


class Partner(models.Model):
    partner_logo = CloudinaryField(
        'ForumPartnerImage', overwrite=True, resource_type="image")
    name = models.CharField(max_length=70)
    website_link = models.URLField(blank=True, null=True)
    order = models.IntegerField(default=1)
    category = models.CharField(
        max_length=50, choices=PartnerCategoryChoices.choices(), default=PartnerCategoryChoices.FUNDING_PARTNER.value)
    forum_event = models.ForeignKey(
        ForumEvent,
        null=True,
        blank=True,
        related_name="partners",
        on_delete=models.SET_NULL,
    )

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.get_category_display()} - {self.name}"


class Program(models.Model):
    title = models.CharField(max_length=100)
    sub_text = RichTextField(blank=True, null=True)  # Replaced QuillField
    order = models.IntegerField(default=1)
    forum_event = models.ForeignKey(
        ForumEvent,
        null=True,
        blank=True,
        related_name="programs",
        on_delete=models.SET_NULL,
    )

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Program - {self.title}"


class Session(models.Model):
    start_time = models.TimeField(blank=True, null=True)
    end_time = models.TimeField(blank=False, null=True)
    session_title = models.CharField(max_length=150)
    session_details = RichTextField(
        blank=False, null=True)  # Replaced QuillField
    order = models.IntegerField(default=1)
    program = models.ForeignKey(
        Program,
        null=True,
        blank=True,
        related_name="sessions",
        on_delete=models.SET_NULL,
    )

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Session - {self.session_title}"


class Support(models.Model):
    query = models.CharField(max_length=80)
    name = models.CharField(max_length=70)
    role = models.CharField(max_length=100, blank=True)
    email = models.EmailField()
    order = models.IntegerField(default=1)
    event = models.ForeignKey(
        ForumEvent,
        null=True,
        blank=True,
        related_name="supports",
        on_delete=models.SET_NULL,
    )

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Support - {self.query}"


class Person(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100, blank=True)
    bio = RichTextField(blank=True, null=True)  # Replaced QuillField
    category = models.CharField(
        max_length=50, choices=CategoryChoices.choices(), default=CategoryChoices.SPEAKER.value)
    picture = CloudinaryField(
        "PersonImage", overwrite=True, resource_type="image")
    twitter = models.URLField(blank=True)
    linked_in = models.URLField(blank=True)
    order = models.IntegerField(default=1)
    forum_event = models.ForeignKey(
        ForumEvent,
        null=True,
        blank=True,
        related_name="persons",
        on_delete=models.SET_NULL,
    )

    class Meta:
        ordering = ['order', 'name']

    def __str__(self):
        return self.name


class ForumResource(models.Model):
    resource_title = models.CharField(max_length=120)
    resource_authors = models.CharField(max_length=200, default="AirQo")
    order = models.IntegerField(default=1)
    forum_event = models.ForeignKey(
        'ForumEvent',
        null=True,
        blank=True,
        related_name="forum_resources",
        on_delete=models.SET_NULL,
    )

    class Meta:
        ordering = ['order', '-id']

    def __str__(self):
        return self.resource_title


class ResourceSession(models.Model):
    session_title = models.CharField(max_length=120)
    forum_resource = models.ForeignKey(
        'ForumResource',
        related_name="resource_sessions",
        on_delete=models.CASCADE,
        default=1
    )
    order = models.IntegerField(default=1)

    class Meta:
        ordering = ['order', '-id']

    def __str__(self):
        return self.session_title


class ResourceFile(models.Model):
    resource_summary = models.TextField(blank=True, null=True)
    file = models.FileField(upload_to='cleanair/resources/')
    session = models.ForeignKey(
        'ResourceSession', related_name='resource_files', on_delete=models.CASCADE, null=True, blank=True, default=1)
    order = models.IntegerField(default=1)

    class Meta:
        ordering = ['order', '-id']

    def __str__(self):
        return self.file.name


# signals.py

@receiver(pre_save, sender=ForumEvent)
def append_short_name(sender, instance, *args, **kwargs):
    if not instance.unique_title:
        instance.unique_title = instance.generate_unique_title()