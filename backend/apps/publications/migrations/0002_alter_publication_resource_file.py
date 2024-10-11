# Generated by Django 4.2.16 on 2024-10-11 18:39

import cloudinary.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('publications', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='publication',
            name='resource_file',
            field=cloudinary.models.CloudinaryField(blank=True, max_length=255, null=True, verbose_name='raw'),
        ),
    ]
