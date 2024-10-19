import uuid
from django.db import models
from ckeditor.fields import RichTextField
from backend.utils.baseModel import BaseModel


# Function to generate UUID
def generate_uuid():
    return uuid.uuid4().hex


# Base Model with UUID primary key
class UUIDBaseModel(BaseModel):
    id = models.CharField(
        primary_key=True, default=generate_uuid, editable=False, max_length=32
    )

    class Meta:
        abstract = True


class Department(UUIDBaseModel):
    name = models.CharField(max_length=30, null=False, blank=False)

    def __str__(self):
        return f"{self.name} Department"


class Career(UUIDBaseModel):
    class JobTypes(models.TextChoices):
        FullTime = "full-time", "Full Time"
        PartTime = "part-time", "Part Time"
        Contract = "contract", "Contract"
        Temporary = "temporary", "Temporary"
        Internship = "internship", "Internship"
        GraduateTraining = "graduate-training", "Graduate Training"

    title = models.CharField(max_length=100)
    closing_date = models.DateTimeField()
    apply_url = models.URLField(max_length=250)
    type = models.CharField(
        max_length=30, default=JobTypes.FullTime, choices=JobTypes.choices
    )
    department = models.ForeignKey(
        Department,
        null=True,
        blank=True,
        related_name="careers",
        on_delete=models.SET_NULL,
    )
    career_details = RichTextField()  # Added RichTextField for career details

    def __str__(self):
        return f"Job - {self.title}"
