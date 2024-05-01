from django import forms
from backendapp.models import *
# from django_ckeditor_5.fields import CKEditor5Field
from django.contrib.auth import authenticate



class AdminLoginForm(forms.ModelForm):

    class Meta:

        model = User
        fields = ['email', 'password']
        error_css_class = 'error'
        required_css_class = 'required'
        widgets = \
            {'email': forms.EmailInput(attrs={'placeholder': 'Email',
             'class':"form-control form-control-rounded", 'required': True}),
             'password': forms.PasswordInput(attrs={'placeholder': 'Password'
             , 'class':"form-control form-control-rounded", 'required': True})}

    def clean_email(self):
        cleaned_data = super().clean()  # call the super clean() method first
        email = cleaned_data.get('email')
        if User.objects.filter(email=email, flag=True).exists():
            pass
        else:
            raise forms.ValidationError('Invalid Email !')
        return email

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get('password')
        email = cleaned_data.get('email')
        if User.objects.filter(email=email,flag=True,user_type=0).exists():
            form = User.objects.get(email=email)
            result = authenticate(username=email, password=password)
            if result is None:
                raise forms.ValidationError('Invalid Password !')
            else:
                pass
        else:
            raise forms.ValidationError("Invalid Username or password")
			

# class PostForm(forms.ModelForm):
    
#     terms_page = CKEditor5Field()

#     class Meta:

#         model = StaticData
#         fields = ('terms_page', )
