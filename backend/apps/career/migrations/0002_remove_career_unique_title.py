# Generated by Django 4.2.16 on 2024-10-11 15:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('career', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='career',
            name='unique_title',
        ),
    ]
