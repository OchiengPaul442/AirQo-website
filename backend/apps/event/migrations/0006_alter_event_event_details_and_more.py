# Generated by Django 4.2.16 on 2024-10-11 09:56

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0005_alter_event_event_details_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='event_details',
            field=ckeditor.fields.RichTextField(),
        ),
        migrations.AlterField(
            model_name='session',
            name='session_details',
            field=ckeditor.fields.RichTextField(),
        ),
    ]