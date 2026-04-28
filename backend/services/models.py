import uuid
from django.db import models
from providers.models import ProviderProfile
from vehicles.models import VehicleType


class ServiceCategory(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    icon = models.CharField(max_length=100, blank=True)
    parent = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE, related_name='subcategories')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'service_categories'
        verbose_name_plural = 'Service Categories'

    def __str__(self):
        return self.name


class Service(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    provider = models.ForeignKey(ProviderProfile, on_delete=models.CASCADE, related_name='services')
    category = models.ForeignKey(ServiceCategory, on_delete=models.CASCADE, related_name='services')
    title = models.CharField(max_length=200)
    description = models.TextField()
    base_price = models.DecimalField(max_digits=10, decimal_places=2)
    max_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    vehicle_types = models.ManyToManyField(VehicleType)
    is_home_deliverable = models.BooleanField(default=False)
    avg_duration_minutes = models.IntegerField(default=60)
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.00)
    total_bookings = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'services'
        indexes = [
            models.Index(fields=['provider', 'is_active']),
            models.Index(fields=['category']),
            models.Index(fields=['rating']),
        ]

    def __str__(self):
        return f"{self.title} - {self.provider.user.phone}"
