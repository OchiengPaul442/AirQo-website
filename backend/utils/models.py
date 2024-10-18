import uuid
from django.db import models
from django.contrib.auth import get_user_model
from django_extensions.db.models import TimeStampedModel

User = get_user_model()


class BaseModel(TimeStampedModel):
    authored_by = models.ForeignKey(
        User, related_name="authored_%(class)s_objects", null=True, blank=True, on_delete=models.SET_NULL
    )
    is_active = models.BooleanField(default=True)

    # The id field retains the current primary key for existing records and generates a UUID for new records
    id = models.CharField(max_length=32, primary_key=True,
                          editable=False, unique=True)

    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        if not self.pk:  # Only generate a UUID for new records
            if not self.id:  # Ensure the UUID is only generated for new records
                self.id = uuid.uuid4().hex
        super().save(*args, **kwargs)
