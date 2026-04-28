import uuid
from django.db import models
from users.models import User


class Certification(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200)
    issuing_authority = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'certifications'

    def __str__(self):
        return self.name


class ProviderProfile(models.Model):
    STATUS_CHOICES = [
        ('ONLINE', 'Online'),
        ('BUSY', 'Busy'),
        ('OFFLINE', 'Offline'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='provider_profile')
    bio = models.TextField(blank=True)
    years_experience = models.IntegerField(default=0)
    certifications = models.ManyToManyField(Certification, blank=True)
    mentor = models.ForeignKey('self', null=True, blank=True, on_delete=models.SET_NULL, related_name='proteges')
    is_mobile = models.BooleanField(default=False)
    coverage_radius_km = models.DecimalField(max_digits=5, decimal_places=2, default=10.00)
    latitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    availability_status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='OFFLINE')
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.00)
    total_jobs = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'provider_profiles'
        indexes = [
            models.Index(fields=['availability_status']),
            models.Index(fields=['rating']),
        ]

    def __str__(self):
        return f"Provider: {self.user.phone}"


class TowTruck(models.Model):
    STATUS_CHOICES = [
        ('AVAILABLE', 'Available'),
        ('EN_ROUTE', 'En Route'),
        ('BUSY', 'Busy'),
        ('OFFLINE', 'Offline'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    provider = models.ForeignKey(ProviderProfile, on_delete=models.CASCADE, related_name='tow_trucks')
    plate_number = models.CharField(max_length=20, unique=True)
    capacity_tons = models.DecimalField(max_digits=4, decimal_places=2)
    latitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='OFFLINE')
    eta_minutes = models.IntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'tow_trucks'
        indexes = [
            models.Index(fields=['status']),
            models.Index(fields=['plate_number']),
        ]

    def __str__(self):
        return f"{self.plate_number} - {self.provider.user.phone}"
