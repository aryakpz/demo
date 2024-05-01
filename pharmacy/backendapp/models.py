from django.db import models
from django_resized import ResizedImageField
from django.contrib.auth.models import User,Permission
from django.contrib.auth.models import AbstractUser
from autoslug import AutoSlugField
# Create your models here.

class User(AbstractUser):
    phone_number=models.CharField(max_length=13,null=True)
    location=models.CharField(max_length=13,null=True)
    user_type=models.IntegerField(default=0)
    flag=models.CharField(max_length=40)
    slug_name=AutoSlugField(populate_from='first_name',max_length=100,unique=True)
    status=models.CharField(max_length=40)
    date=models.DateTimeField(auto_now=True)
    mail_no=models.IntegerField(default=0)

class Medicine(models.Model):
    name=models.CharField(max_length=13,null=True)
    code=models.IntegerField(default=0)
    exp_date=models.DateField()
    status=models.CharField(max_length=40,null=False)
    description=models.CharField(max_length=60)
    flag=models.CharField(max_length=30)
    image=ResizedImageField(quality=100,upload_to="-image",null=True)
    price=models.IntegerField(default=0)
    quantity=models.IntegerField(default=0)
    date=models.DateTimeField(auto_now=True)

class Enquiry(models.Model):
    user=models.ForeignKey(User,related_name="enq_user",on_delete=models.CASCADE,null=True)
    medicine=models.ForeignKey(Medicine,related_name="enq_medicine",on_delete=models.CASCADE,null=True)
    quantity = models.IntegerField(default=0)
    status=models.BooleanField(default=False)
    complete=models.BooleanField(default=False)
    date=models.DateTimeField(auto_now_add=True)
    flag=models.BooleanField(default=True)