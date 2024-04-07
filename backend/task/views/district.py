from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from task.models import District
from task.serialazers.district import DistrictSerializer


class DistrictView(APIView):
    @staticmethod
    def get(request, *args, **kwargs):
        id = kwargs.get('id')
        if not id:
            return Response({"error": "Id not found"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            districts = District.objects.filter(region_id=id)
            # district = District.objects.raw('SELECT * FROM task_district WHERE id = %s', [id,])
        except:
            return Response({"error": "Failed to retrieve district"}, status=status.HTTP_404_NOT_FOUND)
        serializer = DistrictSerializer(districts, many=True)
        return Response(serializer.data)
