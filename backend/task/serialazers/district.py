from rest_framework import serializers

from task.serialazers.region import RegionSerializer


class DistrictSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    region = serializers.CharField()

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['region'] = RegionSerializer(instance.region).data
        return data


class DistrictSimpleSerializer(serializers.Serializer):
    name = serializers.CharField()
