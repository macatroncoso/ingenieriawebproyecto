from ast import Delete
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User

from .serializers import UserModelSerializer


class UserView(APIView):
    def get(self, request):
        user = request.user
        serializer = UserModelSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request):
        user = request.user
        serializer = UserModelSerializer(
            user, data=request.data, partial=True, context={'request': request})
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

class UserDetailView(APIView):
    def delete(self, request,pk):
        try:
            user = User.objects.get(pk=pk)
        except User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        esAdmin = request.user.profile.is_admin ##booleano para saber si es admin

        if not esAdmin :##si no es admin no se puede realizar la accion
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        user.delete()##si es admin se elimina
        return Response(status=status.HTTP_204_NO_CONTENT)