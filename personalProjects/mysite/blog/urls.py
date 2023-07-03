from django.urls import path
from . import views
from .views import PostDeleteView
from .views import register
from .views import blog_home
from django.contrib.auth.views import LoginView
from .views import *

urlpatterns = [
    path('', blog_home, name="blog_home"),
    path('post/all', views.post_list, name="post_list"),
    path('post/<int:id>/', views.post_detail, name='post_detail'),
    path('post/new/', views.post_new, name='post_new'),
    path('post/<int:id>/edit/', views.post_edit, name='post_edit'),
    path('post/<int:pk>/delete/', PostDeleteView.as_view(), name='post_delete'),
    path('register/', register, name='register'),
    path('login/', LoginView.as_view(template_name='registration/login.html'), name='login'),
    path('post/delete/<int:post_id>/', delete_post, name='delete_post'),
]
