from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from task.models import Street
from task.serialazers.street import StreetSerializer


class StreetView(APIView):
    @staticmethod
    def get(request, *args, **kwargs):
        id = kwargs.get('id')
        if not id:
            return Response({"error": "Id not found"}, status=status.HTTP_400_BAD_REQUEST)
        try:
            streets = Street.objects.filter(neighborhood_id=id)
        except:
            return Response({"error": "Failed to retrieve district"}, status=status.HTTP_404_NOT_FOUND)
        serializer = StreetSerializer(streets, many=True)
        return Response(serializer.data)
