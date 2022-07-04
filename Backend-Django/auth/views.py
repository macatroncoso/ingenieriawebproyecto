from multiprocessing import context
from unicodedata import category
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from .serializers import LoginUserSerializer, RegisterUserSerializer
from users.serializers import UserModelSerializer


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginUserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user, token = serializer.create(serializer.validated_data)
        data = {
            'message': 'Login successful',
            'user': UserModelSerializer(user).data,
            'token': token
        }
        return Response(data, status=status.HTTP_200_OK)


class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterUserSerializer(data=request.data,context = {"admin": False})##usuario normal
        serializer.is_valid(raise_exception=True)
        user = serializer.create(serializer.validated_data)

        data = {
            'message': 'Registration successful',
            'user': UserModelSerializer(user).data,
        }

        return Response(data, status=status.HTTP_200_OK)

class RegisterAdminView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterUserSerializer(data=request.data,context = {"admin": True})## Admin
        serializer.is_valid(raise_exception=True)
        user = serializer.create(serializer.validated_data)

        data = {
            'message': 'Registration successful',
            'user': UserModelSerializer(user).data,
        }

        return Response(data, status=status.HTTP_200_OK)

