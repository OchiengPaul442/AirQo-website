# Generated by Django 4.2.16 on 2024-10-11 19:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('highlights', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='highlight',
            name='image',
            field=models.FileField(blank=True, null=True, upload_to='highlights/images/'),
        ),
    ]
