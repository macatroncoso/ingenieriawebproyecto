from django.urls import path

from .views import NewListView, NewDetailView

app_name = 'news'
urlpatterns = [
    path('', NewListView.as_view(), name='list'),
    path('<int:pk>/', NewDetailView.as_view(), name='detail'),
]
