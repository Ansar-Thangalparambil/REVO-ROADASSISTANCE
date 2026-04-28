from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    VehicleTypeViewSet, VehicleMakeViewSet,
    VehicleModelViewSet, VehicleViewSet
)

router = DefaultRouter()
router.register('types', VehicleTypeViewSet, basename='vehicle-type')
router.register('makes', VehicleMakeViewSet, basename='vehicle-make')
router.register('models', VehicleModelViewSet, basename='vehicle-model')
router.register('', VehicleViewSet, basename='vehicle')

urlpatterns = router.urls
