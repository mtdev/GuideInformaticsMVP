from django.urls import include, path

from gi.mods.sample.api import urls as api_urls

urlpatterns = [
    path("api/", include(api_urls)),
    # path("api/", views.ListCreate.as_view()),
]
