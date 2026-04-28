import uuid
from django.db import models
from users.models import User


class VehicleType(models.Model):
    name = models.CharField(max_length=50, unique=True)
    slug = models.SlugField(unique=True)
    icon = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'vehicle_types'

    def __str__(self):
        return self.name


class VehicleMake(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(unique=True)
    logo = models.CharField(max_length=200, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'vehicle_makes'
        ordering = ['name']

    def __str__(self):
        return self.name


class VehicleModel(models.Model):
    make = models.ForeignKey(VehicleMake, on_delete=models.CASCADE, related_name='models')
    name = models.CharField(max_length=100)
    slug = models.SlugField()
    vehicle_type = models.ForeignKey(VehicleType, on_delete=models.CASCADE)
    year_start = models.IntegerField()
    year_end = models.IntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'vehicle_models'
        unique_together = ['make', 'name', 'year_start']
        ordering = ['make__name', 'name']

    def __str__(self):
        return f"{self.make.name} {self.name}"


class Vehicle(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='vehicles')
    model = models.ForeignKey(VehicleModel, on_delete=models.CASCADE)
    year = models.IntegerField()
    color = models.CharField(max_length=50)
    plate_number = models.CharField(max_length=20)
    vin = models.CharField(max_length=17, blank=True)
    is_default = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'vehicles'
        indexes = [
            models.Index(fields=['owner', 'is_default']),
        ]

    def __str__(self):
        return f"{self.model} - {self.plate_number}"
