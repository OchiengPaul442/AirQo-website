# Generated by Django 4.2.16 on 2024-10-11 09:56

from django.db import migrations, models
from django_quill.fields import QuillField


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0005_alter_event_event_details_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='event_details',
            field=QuillField(default="No details available"),
        ),
        migrations.AlterField(
            model_name='session',
            name='session_details',
            field=QuillField(default="No details available"),
        ),
    ]
