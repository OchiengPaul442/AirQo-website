from rest_framework import viewsets
from .models import BoardMember
from .serializers import BoardMemberSerializer


class BoardMemberViewSet(viewsets.ReadOnlyModelViewSet):
    """
    A ViewSet for listing or retrieving board members.
    """
    queryset = BoardMember.objects.all().order_by('order')
    serializer_class = BoardMemberSerializer
