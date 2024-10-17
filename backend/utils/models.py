import uuid
from django.db import models
from django.contrib.auth import get_user_model
from django_extensions.db.models import TimeStampedModel

User = get_user_model()


class BaseModel(TimeStampedModel):
    created_by = models.ForeignKey(
        User, related_name="created_%(class)s_objects", null=True, blank=True, on_delete=models.SET_NULL
    )
    modified_by = models.ForeignKey(
        User, related_name="modified_%(class)s_objects", null=True, blank=True, on_delete=models.SET_NULL
    )
    is_active = models.BooleanField(default=True)
    # The id field is the primary key and uses a 32-character UUID
    id = models.CharField(max_length=32, primary_key=True,
                          default=uuid.uuid4().hex, editable=False)

    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        if not self.pk:  # Record is being created
            if not self.id:  # Only generate UUID for new records
                self.id = uuid.uuid4().hex  # Generate a random 32-character UUID
            self.created_by = getattr(self, 'request_user', None)
        else:
            self.modified_by = getattr(self, 'request_user', None)
        super().save(*args, **kwargs)
