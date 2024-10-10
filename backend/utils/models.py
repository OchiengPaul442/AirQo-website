from django.db import models
from django_extensions.db.models import TimeStampedModel


class SoftDeleteManager(models.Manager):
    """
    Custom manager to return only undeleted objects.
    """

    def get_queryset(self):
        return super().get_queryset().filter(is_deleted=False)


class BaseModel(TimeStampedModel):
    """
    Abstract base model that includes soft delete functionality and timestamp fields.
    """
    is_deleted = models.BooleanField(default=False)  # Soft delete flag

    # Managers
    objects = models.Manager()  # Default manager
    # Custom manager for non-deleted objects
    undeleted_objects = SoftDeleteManager()

    def soft_delete(self):
        """
        Soft delete the object by setting 'is_deleted' to True and saving.
        """
        self.is_deleted = True
        self.save()

    def restore(self):
        """
        Restore the soft-deleted object by setting 'is_deleted' to False and saving.
        """
        self.is_deleted = False
        self.save()

    class Meta:
        abstract = True  # This model will not create its own table
