from rest_framework import serializers
from .models import BoardMember, BoardMemberBiography


class BoardMemberBiographySerializer(serializers.ModelSerializer):
    class Meta:
        fields = ("id", "description", "member", "order")
        model = BoardMemberBiography


class BoardMemberSerializer(serializers.ModelSerializer):
    picture = serializers.SerializerMethodField()
    descriptions = BoardMemberBiographySerializer(read_only=True, many=True)

    class Meta:
        model = BoardMember
        fields = '__all__'

    @staticmethod
    def get_picture(obj):
        return obj.picture.url
