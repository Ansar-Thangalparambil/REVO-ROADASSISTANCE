from django.db import models

class ServiceRequest(models.Model):
    SERVICE_TYPES = [
        ('repair', 'Repair'),
        ('towing', 'Towing'),
    ]

    service_type = models.CharField(max_length=20, choices=SERVICE_TYPES)
    description = models.TextField()
    latitude = models.FloatField()
    longitude = models.FloatField()
    status = models.CharField(max_length=20, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    

    def __str__(self):
        return f"{self.service_type} - {self.status}"

class Provider(models.Model):
    PROVIDER_TYPES = [
        ('garage', 'Garage'),
        ('tow', 'Tow Truck'),
    ]

    name = models.CharField(max_length=100)
    provider_type = models.CharField(max_length=20, choices=PROVIDER_TYPES)
    phone = models.CharField(max_length=15)
    latitude = models.FloatField()
    longitude = models.FloatField()
    is_available = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.name} ({self.provider_type})"