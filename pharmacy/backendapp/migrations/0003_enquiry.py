# Generated by Django 4.2.7 on 2023-12-07 10:19

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backendapp', '0002_rename_quality_medicine_quantity'),
    ]

    operations = [
        migrations.CreateModel(
            name='Enquiry',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField(default=0)),
                ('status', models.BooleanField(default=False)),
                ('complete', models.BooleanField(default=False)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('flag', models.BooleanField(default=True)),
                ('medicine', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='enq_medicine', to='backendapp.medicine')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='enq_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]