from rest_framework import viewsets
from .models import Career, Department
from .serializers import CareerSerializer, DepartmentSerializer

# ViewSet for Career model


class CareerViewSet(viewsets.ModelViewSet):
    queryset = Career.objects.all()
    serializer_class = CareerSerializer

# ViewSet for Department model (ReadOnly)


# ViewSet for Department model (ReadOnly)
class DepartmentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
