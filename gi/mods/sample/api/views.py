from rest_framework.generics import ListAPIView

from gi.mods.sample.models import Sample
from gi.mods.sample.api.serializers import SampleSerializer
from gi.mods.sample.models import RawFile
from gi.mods.sample.api.serializers import RawFileSerializer


class SampleViewSet(ListAPIView):
    serializer_class = SampleSerializer

    def get_queryset(self):
        return Sample.objects.all()

class ListCreate(ListAPIView):
    queryset = RawFile.objects.all()
    serializer_class = RawFileSerializer

