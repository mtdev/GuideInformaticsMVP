from rest_framework.generics import ListAPIView

from gi.mods.sample.models import Sample
from gi.mods.sample.api.serializers import SampleSerializer


class SampleViewSet(ListAPIView):
    serializer_class = SampleSerializer

    def get_queryset(self):
        return Sample.objects.all()
