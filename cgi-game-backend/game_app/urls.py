from django.contrib import admin
from django.urls import path,re_path
from . import views

urlpatterns = [

    re_path(r'^get_all_game/$',views.GetAllGAme.as_view(),name= "Get All Game"),
    re_path(r'^get_all_title/$', views.GetGameTitle.as_view() , name="get game title")
]
