from rest_framework import viewsets
from rest_framework.response import Response
from .models import ImpactNumber
from .serializers import ImpactNumberSerializer


class ImpactNumberViewSet(viewsets.ViewSet):
    """
    A simple ViewSet to retrieve the single instance of ImpactNumber.
    """

    def retrieve(self, request, pk=None):
        # Always retrieve the first instance of ImpactNumber
        impact_number = ImpactNumber.objects.first()
        if not impact_number:
            return Response({"detail": "No Impact Number data found."}, status=404)
        serializer = ImpactNumberSerializer(impact_number)
        return Response(serializer.data)
