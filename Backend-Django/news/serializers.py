from rest_framework import serializers

from .models import New
from users.serializers import UserModelSerializer, UserNewModelSerializer


class NewModelSerializer(serializers.ModelSerializer):
    user = UserNewModelSerializer(read_only=True)

    class Meta:
        model = New
        fields = ('id', 'user', 'title', 'content', 'created_at', 'updated_at')


class NewCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = New
        fields = ('title', 'content')

    def create(self, validated_data):
        user = self.context['request'].user
        return New.objects.create(user=user, **validated_data)

    def update(self, instance, validated_data):

        if instance.user != self.context['request'].user:
            raise serializers.ValidationError('You can only update your own news')

        instance.title = validated_data.get('title', instance.title)
        instance.content = validated_data.get('content', instance.content)
        instance.save()
        return instance
