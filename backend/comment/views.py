from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializers import CommentSerializer

# Create your views here.

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])     
def comments_list(request):
    if request.method == 'GET':
        comment_param = request.query_params.get('videoID')
        sort_param = request.query_params.get('sort')
        comment = Comment.objects.all()
        if comment_param:
            comment = comment.filter(videoID=comment_param)
        elif sort_param:
            comment = comment.order_by(sort_param)
        serializer = CommentSerializer(comment, many=True)
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    elif request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def user_comments(request, pk):
    print('User ', f"{request.user.id} {request.user.email} {request.user.username}")
    
    if request.method == 'GET':
        comment = Comment.objects.filter(user_id=request.user.id)
        serializer = CommentSerializer(comment, many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        comment = get_object_or_404(Comment, pk=pk)
        serializer = CommentSerializer(comment, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


# Get by ID

@api_view(['GET'])
@permission_classes([AllowAny])
def get_comments_by_video_id(request,videoID):
    comments = Comment.objects.filter(video_id=videoID)
    serializer = CommentSerializer(comments,many=True)
    return Response(serializer.data, status=status.HTTP_418_IM_A_TEAPOT)