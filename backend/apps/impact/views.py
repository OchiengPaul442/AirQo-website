from rest_framework import generics
from rest_framework.response import Response
from .models import ImpactNumber
from .serializers import ImpactNumberSerializer


class ImpactNumberDetailView(generics.RetrieveAPIView):
    """
    Retrieve the single instance of ImpactNumber.
    """
    serializer_class = ImpactNumberSerializer

    def get(self, request, *args, **kwargs):
        impact_number = ImpactNumber.objects.first()
        if not impact_number:
            return Response({"detail": "No Impact Number data found."}, status=404)
        serializer = self.get_serializer(impact_number)
        return Response(serializer.data)
