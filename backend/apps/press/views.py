from rest_framework import viewsets
from .models import Press
from .serializers import PressSerializer


class PressViewSet(viewsets.ModelViewSet):
    queryset = Press.undeleted_objects.all()
    serializer_class = PressSerializer
    lookup_field = 'id'

    def perform_destroy(self, instance):
        """
        Override the delete method to perform a soft delete instead of hard delete.
        """
        instance.soft_delete()
