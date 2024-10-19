# backend/utils/baseModel.py

import uuid
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class BaseModel(models.Model):
    """
    Abstract base model that includes common fields for all models.
    """
    _id = models.UUIDField(
        default=uuid.uuid4,
        editable=False,
        unique=False,      # Temporarily set to False
        null=True,         # Allow null for existing records
        blank=True,        # Allow blank in forms
        db_index=True,
        help_text="Unique UUID identifier for the record."
    )

    authored_by = models.ForeignKey(
        User,
        related_name="authored_%(class)s_objects",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        help_text="User who authored the record."
    )

    is_active = models.BooleanField(
        default=True,
        help_text="Indicates whether the record is active."
    )
    created = models.DateTimeField(
        auto_now_add=True,
        help_text="Timestamp when the record was created."
    )
    modified = models.DateTimeField(
        auto_now=True,
        help_text="Timestamp when the record was last modified."
    )

    class Meta:
        abstract = True
        ordering = ['-created']

    def save(self, *args, **kwargs):
        """
        Override save method to ensure _id is populated for existing records
        that might not have it yet.
        """
        if not self._id:
            self._id = uuid.uuid4()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.__class__.__name__} ({self._id})"
