from django.urls import path
from .views import service_requests, providers

urlpatterns = [
    path('requests/', service_requests),
    path('providers/', providers),
]