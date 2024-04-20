from django.db.models import Count, Q
from rest_framework.response import Response
from rest_framework.views import APIView
from task.models import Region


class RegionView(APIView):
    @staticmethod
    def get(request):
        regions = (Region.objects.prefetch_related('districts', 'districts__neighborhoods', )
        .annotate(
            count_districts=Count('districts', distinct=True),
            count_neighbourhoods=Count('districts__neighborhoods', distinct=True),
            count_young_people=Count('persons', distinct=True,
                                     filter=Q(persons__age__gte=18) & Q(persons__age__lte=30)),
            count_people=Count('persons', distinct=True),
            count_houses=Count('houses', distinct=True),
            count_residention=Count('persons', distinct=True, filter=Q(persons__residential_status='shaxsiy')),
            count_femail=Count('persons', distinct=True, filter=Q(persons__gender='Ayol')),
            count_pensioner=Count('persons', distinct=True, filter=Q(persons__age__gte='60'))

        ))

        return Response(regions.values())
