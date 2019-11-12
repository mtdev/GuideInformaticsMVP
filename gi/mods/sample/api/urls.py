from django.urls import path

from gi.mods.sample.api import views

urlpatterns = [
    path("", views.SampleViewSet.as_view(), name="sample"),
    path("api/", views.ListCreate.as_view()),
]
