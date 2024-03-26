from django.urls import path

from . import views

urlpatterns = [
path('task/', views.TaskView.as_view()),
]