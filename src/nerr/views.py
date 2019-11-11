from nerr.models import RawFile
from nerr.serializers import RawFileSerializer
from rest_framework import generics


class ListCreate(generics.ListCreateAPIView):
    """ This should create views for GET and POST requests"""

    queryset = RawFile.objects.all()
    serializer_class = RawFileSerializer
