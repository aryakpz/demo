from django.shortcuts import render
from django.views import View
from backendapp.models import *
from django.contrib import messages
# from backendapp.forms import PostForm
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



class AdminLoginView(FormView):
    form_class =AdminLoginForm
    template_name='form.html'
    def form_valid(self,form):
        form_data=form.save(commit=False)
        user_email=form.cleaned_data['email']
        user_password=form.cleaned_data['password']
        user=authenticate(username=user_email,password=user_password)
        if user is None:
            return HttpResponse("Invalid entry")
        else:
            login(self.request,user)
            return redirect('/admin/home')
        


class AdminHome(View):
    def get(self,request):
        return render(request,"home.html")
    

class MedicineViews(View):
	def get(self,request,*args,**kwargs):
		medicines = Medicine.objects.all().order_by("-id")
		context = {"medicines":medicines}
		return render(request,"medicine.html",context)

class MedicineAdd(View):
    def get(self, request, *args, **kwargs):    
        return render(request, "medicineadd.html")

    def post(self, request, *args, **kwargs):
        name = request.POST.get("name")
        code = request.POST.get("code")
        description = request.POST.get("description")
        price = request.POST.get("price")
        quantity = request.POST.get("quantity")
        image = request.FILES.get("image")
        date = request.POST.get("date")
        Medicine.objects.create(name=name, code=code, description=description, price=price, quantity=quantity, image=image, exp_date=date)
        messages.success(request, "successfully added")
        return redirect("/admin/manage/medicines")
    
class MedicineEdit(View):
    def get(self,request,*args,**kwargs):
        med_id = kwargs.get("id")       
        medicine=Medicine.objects.get(id=med_id)
        context = {"medicine":medicine}
        return render(request,"medicineedit.html",context)

    def post(self,request,*args,**kwargs):
        med_id = kwargs.get("id")       
        medicine=Medicine.objects.get(id=med_id)
        name = request.POST.get("name")
        code = request.POST.get("code")
        description = request.POST.get("description")
        price = request.POST.get("price")
        quantity = request.POST.get("quantity")
        image = request.FILES.get("image")
        date = request.POST.get("date")
        if Medicine.objects.filter(code__iexact=code).exclude(id=med_id).exists():
            messages.success(request,"code with this medicine already exists")
        elif Medicine.objects.filter(name__iexact=name).exclude(id=med_id).exists():
            messages.success(request,"Name with this medicine already exists")
        else:
            medicine.name=name
            medicine.code=code
            medicine.description=description
            medicine.price=price
            medicine.quantity=quantity
            medicine.exp_date=date
    
            if image==None:
                pass
            else:
                medicine.image=image
            medicine.save()
            messages.success(request,"successfully changed")
            return redirect("/admin/manage/medicines")
          
class EnquiryViews(View):
	def get(self,request,*args,**kwargs):
		enquiry=Enquiry.objects.all().order_by("-id")
		context = {"enquiry":enquiry}
		return render(request,"enquiry.html",context)