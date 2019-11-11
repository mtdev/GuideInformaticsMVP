from rest_framework import serializers

from gi.mods.sample.models import Sample


class SampleSerializer(serializers.ModelSerializer):
    hello = serializers.SerializerMethodField()

    class Meta:
        model = Sample
        exclude = []

    def get_hello(self, obj):
        return 'world'
