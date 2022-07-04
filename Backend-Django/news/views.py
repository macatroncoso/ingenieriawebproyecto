from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import NewCreateSerializer, NewModelSerializer
from .models import New


class NewListView(APIView):
    def get(self, request):
        news = New.objects.all().order_by('-created_at')
        serializer = NewModelSerializer(news, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = NewCreateSerializer(
            data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        serializer.create(serializer.validated_data)

        data = {
            'message': 'New created successfully',
            'data': NewModelSerializer(serializer.data).data
        }

        return Response(data, status=status.HTTP_201_CREATED)


class NewDetailView(APIView):

    def get(self, request, pk):
        try:
            news = New.objects.get(pk=pk)
        except New.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = NewModelSerializer(news)
        return Response(serializer.data)

    def put(self, request, pk):
        try:
            news = New.objects.get(pk=pk)
        except New.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = NewCreateSerializer(
            news, data=request.data, partial=True, context={'request': request})
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, pk):
        try:
            news = New.objects.get(pk=pk)
        except New.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        esAdmin = request.user.profile.is_admin ##booleano para saber si es admin

        if not esAdmin :##si no es admin no se puede realizar la accion
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        news.delete()##si es admin se elimina
        return Response(status=status.HTTP_204_NO_CONTENT)
