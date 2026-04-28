from rest_framework import viewsets, permissions
from .models import VehicleType, VehicleMake, VehicleModel, Vehicle
from .serializers import (
    VehicleTypeSerializer, VehicleMakeSerializer,
    VehicleModelSerializer, VehicleSerializer
)


class VehicleTypeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = VehicleType.objects.all()
    serializer_class = VehicleTypeSerializer
    permission_classes = [permissions.AllowAny]


class VehicleMakeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = VehicleMake.objects.all()
    serializer_class = VehicleMakeSerializer
    permission_classes = [permissions.AllowAny]


class VehicleModelViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = VehicleModel.objects.all()
    serializer_class = VehicleModelSerializer
    permission_classes = [permissions.AllowAny]
    
    def get_queryset(self):
        queryset = super().get_queryset()
        make_id = self.request.query_params.get('make')
        if make_id:
            queryset = queryset.filter(make_id=make_id)
        return queryset


class VehicleViewSet(viewsets.ModelViewSet):
    serializer_class = VehicleSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return Vehicle.objects.filter(owner=self.request.user)
