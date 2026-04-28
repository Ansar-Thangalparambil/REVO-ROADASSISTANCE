from rest_framework import serializers
from .models import VehicleType, VehicleMake, VehicleModel, Vehicle


class VehicleTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = VehicleType
        fields = ['id', 'name', 'slug', 'icon']


class VehicleMakeSerializer(serializers.ModelSerializer):
    class Meta:
        model = VehicleMake
        fields = ['id', 'name', 'slug', 'logo']


class VehicleModelSerializer(serializers.ModelSerializer):
    make = VehicleMakeSerializer(read_only=True)
    vehicle_type = VehicleTypeSerializer(read_only=True)
    
    class Meta:
        model = VehicleModel
        fields = ['id', 'make', 'name', 'slug', 'vehicle_type', 'year_start', 'year_end']


class VehicleSerializer(serializers.ModelSerializer):
    model = VehicleModelSerializer(read_only=True)
    model_id = serializers.UUIDField(write_only=True)
    
    class Meta:
        model = Vehicle
        fields = ['id', 'model', 'model_id', 'year', 'color', 'plate_number', 'vin', 'is_default', 'created_at']
        read_only_fields = ['id', 'created_at']
    
    def create(self, validated_data):
        validated_data['owner'] = self.context['request'].user
        return super().create(validated_data)
