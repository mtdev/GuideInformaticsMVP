from django.urls import include, path
from django.views.generic import TemplateView

from gi.mods.sample import urls as sample_urls

urlpatterns = [
    path('sample/', include(sample_urls)),
    path('', TemplateView.as_view(template_name='index.html')),
]

# from gi.mods.sample.api import views

# urlpatterns = [
#     path('', views.SampleViewSet.as_view(), name='sample'),
# ]
