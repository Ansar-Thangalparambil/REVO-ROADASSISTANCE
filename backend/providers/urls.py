from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProviderProfileViewSet, TowTruckViewSet

router = DefaultRouter()
router.register('', ProviderProfileViewSet, basename='provider')
router.register('tow-trucks', TowTruckViewSet, basename='tow-truck')

urlpatterns = router.urls
