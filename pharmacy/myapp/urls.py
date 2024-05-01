from . import views
from django.contrib import admin
from django.urls import path
from django.contrib.auth import views as auth_views


urlpatterns=[
    path("home",views.home.as_view()),
    path("medicines",views.Medicines.as_view()),
    path("product-detail/<int:id>",views. MedicinesDetail.as_view()),
    path("login",views.UserLoginView.as_view()),
    path("register",views.UserRegisterView.as_view()),
    path("logout",views.Logout.as_view()),
    path("forgot",views.UserPassword.as_view()),
    path("otp",views.OTP.as_view()),
]
