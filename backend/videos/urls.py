from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from . import views
urlpatterns = [
    path('',views.VideosListView.as_view()),
    path('categories/',views.CategoriesListView.as_view()),
    path('addvideo/',views.AddVideoView.as_view()),
    path('<str:video_id>/',views.VideoDetailView.as_view()),
]
