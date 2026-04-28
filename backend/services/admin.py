from django.contrib import admin
from .models import ServiceCategory, Service


@admin.register(ServiceCategory)
class ServiceCategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'parent', 'created_at']
    list_filter = ['parent']
    search_fields = ['name']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ['title', 'provider', 'category', 'base_price', 'rating', 'is_active', 'created_at']
    list_filter = ['category', 'is_active', 'is_home_deliverable']
    search_fields = ['title', 'provider__user__phone']
    readonly_fields = ['rating', 'total_bookings', 'created_at', 'updated_at']
