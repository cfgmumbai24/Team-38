from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import VideoSerializer, CategorySerializer
from .models import Video, Category
# Create your views here.

class VideosListView(APIView):
    def get(self, request):
        queryset=Video.objects.all()
        serializer=VideoSerializer(queryset,many=True)
        return Response(serializer.data)
    
class VideoDetailView(APIView):
    def get(self, request, video_id):
        queryset=Video.objects.get(id=video_id)
        serializer=VideoSerializer(queryset)
        return Response(serializer.data)
    

class CategoriesListView(APIView):
    def get(self, request):
        queryset=Category.objects.all()
        serializer=CategorySerializer(queryset,many=True)
        return Response(serializer.data)