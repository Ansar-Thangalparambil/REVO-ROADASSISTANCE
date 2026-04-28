from django.contrib import admin
from .models import VehicleType, VehicleMake, VehicleModel, Vehicle


@admin.register(VehicleType)
class VehicleTypeAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'created_at']
    search_fields = ['name']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(VehicleMake)
class VehicleMakeAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'created_at']
    search_fields = ['name']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(VehicleModel)
class VehicleModelAdmin(admin.ModelAdmin):
    list_display = ['make', 'name', 'vehicle_type', 'year_start', 'year_end']
    list_filter = ['make', 'vehicle_type']
    search_fields = ['name', 'make__name']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Vehicle)
class VehicleAdmin(admin.ModelAdmin):
    list_display = ['owner', 'model', 'year', 'color', 'plate_number', 'is_default', 'created_at']
    list_filter = ['is_default', 'year']
    search_fields = ['owner__phone', 'plate_number', 'vin']
    readonly_fields = ['created_at', 'updated_at']
