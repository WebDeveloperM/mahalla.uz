from rest_framework.response import Response
from rest_framework.views import APIView
from task.models import Region
from task.serialazers.region import RegionSerializer


class RegionView(APIView):
    @staticmethod
    def get(request):
        regions = Region.objects.all()
        serializer = RegionSerializer(regions, many=True)
        return Response(serializer.data)
