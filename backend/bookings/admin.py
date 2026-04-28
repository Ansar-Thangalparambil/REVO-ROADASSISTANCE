from django.contrib import admin
from .models import Booking


@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ['id', 'customer', 'provider', 'service', 'status', 'payment_status', 'agreed_price', 'created_at']
    list_filter = ['status', 'payment_status', 'created_at']
    search_fields = ['customer__user__phone', 'provider__user__phone', 'id']
    readonly_fields = ['created_at', 'updated_at']
    
    fieldsets = (
        ('Booking Info', {
            'fields': ('customer', 'provider', 'service', 'vehicle', 'status')
        }),
        ('Location', {
            'fields': ('pickup_latitude', 'pickup_longitude', 'pickup_address', 
                      'destination_latitude', 'destination_longitude', 'destination_address')
        }),
        ('Payment', {
            'fields': ('agreed_price', 'platform_fee', 'total_amount', 'payment_status')
        }),
        ('Timeline', {
            'fields': ('scheduled_at', 'accepted_at', 'started_at', 'completed_at', 'cancelled_at')
        }),
        ('Security', {
            'fields': ('otp_start', 'otp_complete')
        }),
        ('Additional', {
            'fields': ('notes', 'cancellation_reason', 'created_at', 'updated_at')
        }),
    )
