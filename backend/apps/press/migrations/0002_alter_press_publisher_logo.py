# Generated by Django 4.2.16 on 2024-10-21 09:32

import backend.utils.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('press', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='press',
            name='publisher_logo',
            field=backend.utils.fields.CustomCloudinaryField(blank=True, default='website/uploads/default_image.webp', max_length=255, null=True),
        ),
    ]
