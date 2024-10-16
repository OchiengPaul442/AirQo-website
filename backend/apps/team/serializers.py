# serializers.py

from rest_framework import serializers
from .models import Member, MemberBiography


class MemberBiographySerializer(serializers.ModelSerializer):
    class Meta:
        model = MemberBiography
        fields = ("id", "description", "member", "order")


class TeamMemberSerializer(serializers.ModelSerializer):
    descriptions = MemberBiographySerializer(read_only=True, many=True)
    picture = serializers.SerializerMethodField()

    class Meta:
        model = Member
        fields = '__all__'

    def get_picture(self, obj):
        if obj.picture:
            return obj.picture.url
        return None
