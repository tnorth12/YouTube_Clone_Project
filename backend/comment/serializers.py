from rest_framework import serializers
from .models import Comment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'videoID', 'text', 'likes', 'dislikes']    
        depth = 1


# removed 'user' from fields