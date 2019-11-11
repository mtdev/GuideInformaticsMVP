from rest_framework import serializers
from .models import RawFile


class RawFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = RawFile
        fields = ("name", "file_name", "raw_data", "uploaded_on")
