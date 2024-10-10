from django.urls import path
from .views import ImpactNumberDetailView

urlpatterns = [
    path('impact-number/', ImpactNumberDetailView.as_view(),
         name='impact-number-detail'),
]
