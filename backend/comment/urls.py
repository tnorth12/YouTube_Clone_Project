from django.urls import path
from comment import views

urlpatterns = [
    path('all/', views.comments_list),              
    path('<int:pk>/', views.user_comments),
    
]