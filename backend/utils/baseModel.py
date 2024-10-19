import uuid
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class BaseModel(models.Model):
    # Existing ID field remains
    id = models.BigAutoField(primary_key=True)

    # Introduce the _id UUID field as a unique identifier for all records
    _id = models.UUIDField(
        default=uuid.uuid4, editable=False, unique=True, db_index=True)

    # Add authored_by for tracking who created the record
    authored_by = models.ForeignKey(
        User, related_name="authored_%(class)s_objects", null=True, blank=True, on_delete=models.SET_NULL
    )

    is_active = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        if not self._id:
            self._id = uuid.uuid4()  # Ensure _id is populated for existing records
        super().save(*args, **kwargs)
