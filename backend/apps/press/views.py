from rest_framework import viewsets
from .models import Press
from .serializers import PressSerializer


class PressViewSet(viewsets.ModelViewSet):
    queryset = Press.undeleted_objects.all()
    serializer_class = PressSerializer
    lookup_field = 'id'

    def perform_create(self, serializer):
        # Automatically assign the current user as the creator of the record
        serializer.save(created_by=self.request.user,
                        modified_by=self.request.user)

    def perform_update(self, serializer):
        # Automatically assign the current user as the modifier of the record
        serializer.save(modified_by=self.request.user)

    def perform_destroy(self, instance):
        instance.soft_delete()
