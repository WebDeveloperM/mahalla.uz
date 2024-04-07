from rest_framework import serializers


from task.serialazers.neighborhood import NeighborhoodSimpleSerializer


class StreetSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    neighborhood = serializers.CharField()

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['neighborhood'] = NeighborhoodSimpleSerializer(instance.neighborhood).data
        return data

class StreetSimpleSerializer(serializers.Serializer):
    name = serializers.CharField()
