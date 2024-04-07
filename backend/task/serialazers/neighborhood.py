from rest_framework import serializers

from task.serialazers.district import DistrictSimpleSerializer


class NeighborhoodSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    district = serializers.CharField()

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['district'] = DistrictSimpleSerializer(instance.district).data
        return data


class NeighborhoodSimpleSerializer(serializers.Serializer):
    name = serializers.CharField()
