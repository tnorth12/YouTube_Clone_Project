from django.urls import path, include
from comment import views

urlpatterns = [
    path('all/', views.comments_list),
    path('<str:video_id>/',views.get_comments_by_video_id),    #moved this to top because it wants it authenticated otherwise                  
    path('<pk>/', views.user_comments),    
    
    
    
]