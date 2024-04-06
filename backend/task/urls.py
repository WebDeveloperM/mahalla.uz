from django.urls import path

from task.views.district import DistrictView

from task.views.region import RegionView

urlpatterns = [
    path("district/", DistrictView.as_view()),
    path("region/", RegionView.as_view()),
]