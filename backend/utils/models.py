from django.db import models
from django_extensions.db.models import TimeStampedModel


class SoftDeleteManager(models.Manager):
    def get_queryset(self):
        # Return only undeleted objects
        return super().get_queryset().filter(is_deleted=False)


class BaseModel(TimeStampedModel):
    is_deleted = models.BooleanField(default=False)
    objects = models.Manager()  # Default manager: returns all objects
    # Custom manager: returns only undeleted objects
    undeleted_objects = SoftDeleteManager()

    def soft_delete(self):
        # Perform soft delete
        self.is_deleted = True
        self.save()

    def restore(self):
        # Restore the soft-deleted object
        self.is_deleted = False
        self.save()

    class Meta:
        abstract = True
