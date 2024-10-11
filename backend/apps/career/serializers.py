from rest_framework import serializers
from .models import Career, Department

# Serializer for Career model


class CareerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Career
        fields = ['id', 'title', 'closing_date', 'apply_url',
                  'type', 'department', 'career_details']

# Serializer for Department model


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ['id', 'name']
