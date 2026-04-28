from rest_framework import serializers
from .models import ProviderProfile, Certification, TowTruck
from users.serializers import UserSerializer


class CertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certification
        fields = ['id', 'name', 'issuing_authority', 'description']


class ProviderProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    certifications = CertificationSerializer(many=True, read_only=True)
    mentor = serializers.SerializerMethodField()
    
    class Meta:
        model = ProviderProfile
        fields = [
            'user', 'bio', 'years_experience', 'certifications', 'mentor',
            'is_mobile', 'coverage_radius_km', 'latitude', 'longitude',
            'availability_status', 'rating', 'total_jobs', 'created_at'
        ]
        read_only_fields = ['rating', 'total_jobs', 'created_at']
    
    def get_mentor(self, obj):
        if obj.mentor:
            return {
                'id': obj.mentor.user.id,
                'phone': str(obj.mentor.user.phone),
                'rating': float(obj.mentor.rating)
            }
        return None


class TowTruckSerializer(serializers.ModelSerializer):
    provider = ProviderProfileSerializer(read_only=True)
    
    class Meta:
        model = TowTruck
        fields = [
            'id', 'provider', 'plate_number', 'capacity_tons',
            'latitude', 'longitude', 'status', 'eta_minutes', 'created_at'
        ]
        read_only_fields = ['id', 'created_at']
