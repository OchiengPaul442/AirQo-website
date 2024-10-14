from django.db import models
import uuid

# Function to generate UUID


def generate_uuid():
    return uuid.uuid4().hex

# Base Model with UUID primary key


class UUIDBaseModel(models.Model):
    id = models.CharField(
        primary_key=True, default=generate_uuid, editable=False, max_length=32
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

# FAQ Model inheriting from UUIDBaseModel


class FAQ(UUIDBaseModel):
    question = models.CharField(max_length=150)
    answer = models.TextField()

    def __str__(self):
        return self.question
