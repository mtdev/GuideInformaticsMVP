from rest_framework import serializers

from gi.mods.sample.models import Sample
from gi.mods.sample.models import RawFile


class SampleSerializer(serializers.ModelSerializer):
    hello = serializers.SerializerMethodField()

    class Meta:
        model = Sample
        exclude = []

    def get_hello(self, obj):
        return 'world'

class RawFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = RawFile
        fields = ('username', 'filename', 'raw_data', 'timestamp')
