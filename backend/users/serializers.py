from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import CustomerProfile, OTPVerification
import random
from datetime import timedelta
from django.utils import timezone

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'phone', 'email', 'role', 'is_verified', 'preferred_language', 'created_at']
        read_only_fields = ['id', 'created_at']


class RegisterSerializer(serializers.Serializer):
    phone = serializers.CharField(max_length=20)
    password = serializers.CharField(write_only=True, min_length=6)
    email = serializers.EmailField(required=False, allow_blank=True)
    role = serializers.ChoiceField(choices=['CUSTOMER', 'PROVIDER', 'VENDOR'], default='CUSTOMER')
    preferred_language = serializers.ChoiceField(
        choices=['en', 'ar', 'ur', 'hi'], 
        default='en'
    )

    def create(self, validated_data):
        user = User.objects.create_user(
            phone=validated_data['phone'],
            password=validated_data['password'],
            email=validated_data.get('email', ''),
            role=validated_data.get('role', 'CUSTOMER'),
            preferred_language=validated_data.get('preferred_language', 'en'),
            is_verified=True  # Auto-verify for development
        )
        
        # Create profile based on role
        if user.role == 'CUSTOMER':
            CustomerProfile.objects.create(user=user)
        elif user.role == 'PROVIDER':
            from providers.models import ProviderProfile
            ProviderProfile.objects.create(user=user)
        # Vendor profile can be added later when needed
        
        return user


class VerifyOTPSerializer(serializers.Serializer):
    phone = serializers.CharField(max_length=20)
    otp_code = serializers.CharField(max_length=6)

    def validate(self, data):
        try:
            user = User.objects.get(phone=data['phone'])
            otp = OTPVerification.objects.filter(
                user=user,
                otp_code=data['otp_code'],
                is_used=False,
                expires_at__gt=timezone.now()
            ).first()
            
            if not otp:
                raise serializers.ValidationError("Invalid or expired OTP")
            
            data['user'] = user
            data['otp'] = otp
            return data
        except User.DoesNotExist:
            raise serializers.ValidationError("User not found")


class LoginSerializer(serializers.Serializer):
    phone = serializers.CharField(max_length=20)
    password = serializers.CharField(write_only=True)


class CustomerProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    
    class Meta:
        model = CustomerProfile
        fields = ['user', 'emergency_contact', 'saved_locations', 'default_payment_method', 'created_at']
        read_only_fields = ['created_at']
