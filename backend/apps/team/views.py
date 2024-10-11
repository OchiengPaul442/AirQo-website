from rest_framework import viewsets
from .models import Member
from .serializers import MemberSerializer


class TeamViewSet(viewsets.ReadOnlyModelViewSet):
    """
    A simple ViewSet for listing or retrieving team members.
    """
    queryset = Member.objects.all().order_by('order')
    serializer_class = MemberSerializer
