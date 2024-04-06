from rest_framework.serializers import ModelSerializer

from task.models import District


class DistrictSerializer(ModelSerializer):
    class Meta:
        model = District
        fields = '__all__'
