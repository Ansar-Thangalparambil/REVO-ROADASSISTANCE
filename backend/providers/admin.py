from django.contrib import admin
from .models import Certification, ProviderProfile, TowTruck


@admin.register(Certification)
class CertificationAdmin(admin.ModelAdmin):
    list_display = ['name', 'issuing_authority', 'created_at']
    search_fields = ['name', 'issuing_authority']


@admin.register(ProviderProfile)
class ProviderProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'availability_status', 'rating', 'total_jobs', 'is_mobile', 'created_at']
    list_filter = ['availability_status', 'is_mobile']
    search_fields = ['user__phone', 'bio']
    readonly_fields = ['rating', 'total_jobs', 'created_at', 'updated_at']


@admin.register(TowTruck)
class TowTruckAdmin(admin.ModelAdmin):
    list_display = ['plate_number', 'provider', 'capacity_tons', 'status', 'created_at']
    list_filter = ['status']
    search_fields = ['plate_number', 'provider__user__phone']
    readonly_fields = ['created_at', 'updated_at']
