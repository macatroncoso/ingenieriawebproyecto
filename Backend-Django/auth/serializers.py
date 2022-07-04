
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.contrib.auth import password_validation, authenticate
from users.models import Profile


class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=255)
    password = serializers.CharField(max_length=255)

    def validate(self, data):
        user = authenticate(**data)
        if not user:
            raise serializers.ValidationError("Invalid credentials")

        self.context['user'] = user
        return data

    def create(self, validated_data):
        token, created = Token.objects.get_or_create(user=self.context['user'])
        return self.context['user'], token.key


class RegisterUserSerializer(serializers.Serializer):
    username = serializers.CharField(min_length=4, max_length=255, validators=[
                                     UniqueValidator(queryset=User.objects.all())])
    password = serializers.CharField(min_length=8, max_length=20)
    password2 = serializers.CharField(min_length=8, max_length=20)
    email = serializers.EmailField(max_length=255, validators=[
                                   UniqueValidator(queryset=User.objects.all())])
    first_name = serializers.CharField(max_length=255)
    last_name = serializers.CharField(max_length=255)

    def validate(self, data):

        # validation for password and password2
        if data['password'] != data['password2']:
            raise serializers.ValidationError("Passwords do not match")

        password_validation.validate_password(data['password'])
        return data

    def create(self, validated_data):
        validated_data.pop('password2')
        isAdmin = self.context["admin"]
        user = User.objects.create_user(**validated_data) ##se inserta en la bd
        profile = {##datos enviados en linea 54
            "user": user,
            "is_admin" : isAdmin
        }
        Profile.objects.create(**profile)##insertamos el registro profile asociado al usuario en la bd

        return user

