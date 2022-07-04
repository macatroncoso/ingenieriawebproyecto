from django.urls import path

from .views import UserView,UserDetailView

app_name = 'users'
urlpatterns = [
  path('', UserView.as_view(), name='user'),
  path('<int:pk>/', UserDetailView.as_view(), name='user-detail'),
]
