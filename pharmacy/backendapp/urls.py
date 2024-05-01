from . import views
from django.contrib import admin
from django.urls import path
from django.contrib.auth import views as auth_views

urlpatterns=[
    path("",views.AdminLoginView.as_view()),
    path("home",views.AdminHome.as_view()),
    path("manage/medicines",views.MedicineViews.as_view()),
    path("manage/add/medicine",views.MedicineAdd.as_view()),
    path("manage/medicine/edit/<int:id>",views.MedicineEdit.as_view()),
    path("manage/enquiry",views.EnquiryViews.as_view()),
]
