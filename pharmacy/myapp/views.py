from django.shortcuts import render
from django.views import View
from backendapp.models import *
from django.contrib import messages

from backendapp.forms import AdminLoginForm
from django.contrib.auth import authenticate
from django.shortcuts import render,redirect
from django.contrib.auth import get_user_model
User=get_user_model()
from rest_framework.views import APIView
from rest_framework.response import Response
from django.views.generic.edit import FormView
from django.contrib.auth import authenticate,login,logout
from django.http import HttpResponse,response,HttpResponseRedirect
from django.template.loader import render_to_string
import random
from backendapp.models import models


from django.db.models import Q  

from django.core.mail import send_mail
from django.utils.html import strip_tags
from django.conf import settings
# from backendapp.forms import PostForm 

class home(View):
    def get(self,request):
        return render(request,'index.html')
    
class Medicines(View):
	def get(self,request,*args,**kwargs):
		new=Medicine.objects.all().order_by("-id")[:10]
		context={"new":new}
		return render(request,"medicines.html",context)
    
     
class MedicinesDetail(View):
    def get(self,request,*args,**kwargs):
        if 'cart' in self.request.session:
            if (self.request.session['cart'] == True):
                cart=True
                del self.request.session['cart']
            else:
                cart=False
                del self.request.session['cart']
        else:
              cart=False
        userid = kwargs.get("id")
        new=Medicine.objects.get(id=userid)
        context={"new":new,"cart":cart}
        return render(request,"shop-single.html",context)
    
    def post(self,request,*args,**kwargs):
        user=request.user
        print("user")
        userid = kwargs.get("id")
        new=Medicine.objects.get(id=userid)
        count=request.POST.get("count")
        Enquiry.objects.create(user=user,medicine=new,quantity=count)
        self.request.session['cart'] = True
        return redirect("/product-detail/"+str(userid))

class UserLoginView(View):
    def get(self,request,*args,**kwargs):
        if 'login' in self.request.session:
            if (self.request.session['login'] == True):
                login=True
                del self.request.session['login']
            else:
                login=False
                del self.request.session['login']
        else:
            login="None"
        context={"login":login}
        return render(request,"login.html",context)

    def post(self,request,*args,**kwargs):
        username = request.POST.get("email")
        password = request.POST.get("pass")
        user = authenticate(username=username,password=password,user_type=2)
        if user is None:
            self.request.session['login'] = True
            return redirect('/login')
        else:
            if user.flag==False:
                self.request.session['login'] = False
                return redirect('/login')
            else:
                login(self.request, user)
                return redirect('/home')
        

class UserRegisterView(View):
    def get(self,request,*args,**kwargs):
        popup_show=False
        if 'loginpopup' in self.request.session:
            if (self.request.session['loginpopup'] == True):
                popup_show=True
                del self.request.session['loginpopup']
            else:
                popup_show=False
                del self.request.session['loginpopup']
        else:
            popup_show="None"
        context={"popup_show":popup_show}
        return render(request,"register.html",context)
    def post(self,request,*args,**kwargs):
        name = request.POST.get("first_name")
        email = request.POST.get("email")
        password = request.POST.get("pass")
        phone = request.POST.get("phone")
        location = request.POST.get("location")
        conf_password = request.POST.get("confpass")
        if password!=conf_password:
            return HttpResponse("Password not matched")
        else:
            if User.objects.filter(email=email).exists():
                self.request.session['loginpopup'] = True
                return redirect("/register")
            else:
                form = User.objects.create(first_name=name,username=email,email=email,phone_number=phone,location=location,user_type=2,flag=True,status=True)
                form.set_password(password)
                form.save()
                self.request.session['loginpopup'] = False
                login(self.request, form)
                return redirect('/home')
            
class Logout(View):
    def get(self,request):
        logout(request)
        return redirect('/login')
    
class UserPassword(View):
    def get(self,request):
        return render(request,"forgot.html")
    def post(self,request):
        email = request.POST.get("email")
        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            number=random.randint(1111,9999)
            user.mail_no=number
            user.save()
            subject = 'Password change'
            html_message =  render_to_string('email_template.html', 
            {
                
                'token': number,
            })
            plain_message = strip_tags(html_message)
            email_from = settings.EMAIL_HOST_USER
            recipient = [user.email]
            send_mail(subject,plain_message,email_from, recipient,html_message=html_message)
            return redirect("otp")
        else:
            return HttpResponse("Invalid email")

class OTP(View):
    
    def get(self,request):
        return render(request,"otp.html")
    def post(self,request):
        form = request.POST.get("otp")
        if User.objects.filter(mail_no=form).exists():
            user=User.objects.filter(mail_no=form).first()
            login(self.request, user)
            User.objects.all().update(mail_no=None)
            return redirect("/changenew/"+str(user.id))
        else:
            return HttpResponse("Invalide otp")

class passwordNew(View):
    def get(self,request,*args,**kwargs):
        userid = kwargs.get("id")
        return render(request,"passchange.html")
    def post(self,request,*args,**kwargs):
        userid = kwargs.get("id")
        user=User.objects.get(id=userid)
        password = request.POST.get("pass")
        confirm = request.POST.get("confirm")
        if password != confirm:
            return HttpResponse("Password not matched")
        else:
            user.set_password(password)
            user.save()
            return redirect("login")
        

