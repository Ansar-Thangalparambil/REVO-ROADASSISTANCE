from rest_framework import serializers
from .models import ServiceCategory, Service
from providers.serializers import ProviderProfileSerializer


class ServiceCategorySerializer(serializers.ModelSerializer):
    subcategories = serializers.SerializerMethodField()
    
    class Meta:
        model = ServiceCategory
        fields = ['id', 'name', 'slug', 'icon', 'parent', 'subcategories']
    
    def get_subcategories(self, obj):
        if obj.subcategories.exists():
            return ServiceCategorySerializer(obj.subcategories.all(), many=True).data
        return []


class ServiceSerializer(serializers.ModelSerializer):
    provider = ProviderProfileSerializer(read_only=True)
    category = ServiceCategorySerializer(read_only=True)
    category_id = serializers.UUIDField(write_only=True)
    
    class Meta:
        model = Service
        fields = [
            'id', 'provider', 'category', 'category_id', 'title', 'description',
            'base_price', 'max_price', 'is_home_deliverable', 'avg_duration_minutes',
            'rating', 'total_bookings', 'is_active', 'created_at'
        ]
        read_only_fields = ['id', 'rating', 'total_bookings', 'created_at']
