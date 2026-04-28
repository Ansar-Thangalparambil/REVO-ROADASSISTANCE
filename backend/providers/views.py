from rest_framework import viewsets, permissions
from .models import ProviderProfile, TowTruck
from .serializers import ProviderProfileSerializer, TowTruckSerializer


class ProviderProfileViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ProviderProfile.objects.filter(availability_status='ONLINE')
    serializer_class = ProviderProfileSerializer
    permission_classes = [permissions.AllowAny]


class TowTruckViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = TowTruck.objects.filter(status='AVAILABLE')
    serializer_class = TowTruckSerializer
    permission_classes = [permissions.AllowAny]
