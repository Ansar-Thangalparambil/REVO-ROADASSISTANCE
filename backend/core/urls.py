from django.urls import path
from .views import service_requests, providers, health_check

urlpatterns = [
    path('health/', health_check),
    path('requests/', service_requests),
    path('providers/', providers),
]