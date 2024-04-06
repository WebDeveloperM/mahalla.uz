from rest_framework.response import Response
from rest_framework.views import APIView

from task.models import District
from task.serialazers.district import DistrictSerializer


class DistrictView(APIView):
    @staticmethod
    def get(request):
        districts = District.objects.raw('SELECT * FROM task_district')
        serializer = DistrictSerializer(districts, many=True)
        return Response(serializer.data)
