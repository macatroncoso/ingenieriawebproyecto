from django.urls import path
from .views import LoginView,RegisterView, RegisterAdminView

app_name = 'auth'
urlpatterns = [
  path('login/',LoginView.as_view(),name='login'),
  path('register/',RegisterView.as_view(),name='register'),
  path('register/admin/',RegisterAdminView.as_view(),name='register-admin'),
]
