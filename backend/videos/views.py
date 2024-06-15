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
        return Response(serializer.data.get('url'))
    
class CategoriesListView(APIView):
    def get(self, request):
        queryset=Category.objects.all()
        serializer=CategorySerializer(queryset,many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer=CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  
    
class AddVideoView(APIView):
    def post(self, request):
        category=request.data.get('category')
        url=request.data.get('url')
        title=request.data.get('title')
        author=request.data.get('author')
        category_obj=Category.objects.get(name=category)
        video=Video.objects.create(url=url,title=title,author=author,category=category_obj)
        video.save()
        return Response(status=status.HTTP_201_CREATED)
    