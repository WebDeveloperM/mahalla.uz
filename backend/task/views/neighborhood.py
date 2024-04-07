from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from task.models import Neighborhood

from task.serialazers.neighborhood import NeighborhoodSerializer


class NeighborhoodView(APIView):
    @staticmethod
    def get(request, *args, **kwargs):
        id = kwargs.get('id')
        if not id:
            return Response({"error": "Id not found"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            neighborhood = Neighborhood.objects.filter(district_id=id)
        except:
            return Response({"error": "Failed to retrieve district"}, status=status.HTTP_404_NOT_FOUND)
        serializer = NeighborhoodSerializer(neighborhood, many=True)
        return Response(serializer.data)
