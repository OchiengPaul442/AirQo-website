# Generated by Django 4.2.16 on 2024-10-17 19:32

import backend.utils.fields
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('event', '0009_alter_event_background_image_alter_event_event_image_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='is_deleted',
        ),
        migrations.RemoveField(
            model_name='inquiry',
            name='is_deleted',
        ),
        migrations.RemoveField(
            model_name='partnerlogo',
            name='is_deleted',
        ),
        migrations.RemoveField(
            model_name='program',
            name='is_deleted',
        ),
        migrations.RemoveField(
            model_name='resource',
            name='is_deleted',
        ),
        migrations.RemoveField(
            model_name='session',
            name='is_deleted',
        ),
        migrations.AddField(
            model_name='event',
            name='created_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='created_%(class)s_objects', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='event',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='event',
            name='modified_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='modified_%(class)s_objects', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='inquiry',
            name='created_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='created_%(class)s_objects', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='inquiry',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='inquiry',
            name='modified_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='modified_%(class)s_objects', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='partnerlogo',
            name='created_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='created_%(class)s_objects', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='partnerlogo',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='partnerlogo',
            name='modified_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='modified_%(class)s_objects', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='program',
            name='created_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='created_%(class)s_objects', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='program',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='program',
            name='modified_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='modified_%(class)s_objects', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='resource',
            name='created_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='created_%(class)s_objects', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='resource',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='resource',
            name='modified_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='modified_%(class)s_objects', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='session',
            name='created_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='created_%(class)s_objects', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='session',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='session',
            name='modified_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='modified_%(class)s_objects', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='event',
            name='background_image',
            field=backend.utils.fields.CustomImageField(blank=True, default='uploads/default_image.webp', null=True, upload_to='uploads/images/'),
        ),
        migrations.AlterField(
            model_name='event',
            name='event_image',
            field=backend.utils.fields.CustomImageField(blank=True, default='uploads/default_image.webp', null=True, upload_to='uploads/images/'),
        ),
        migrations.AlterField(
            model_name='event',
            name='id',
            field=models.CharField(default='354e07be47d648099bd125eb0ad8d669', editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='inquiry',
            name='id',
            field=models.CharField(default='354e07be47d648099bd125eb0ad8d669', editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='partnerlogo',
            name='id',
            field=models.CharField(default='354e07be47d648099bd125eb0ad8d669', editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='partnerlogo',
            name='partner_logo',
            field=backend.utils.fields.CustomImageField(blank=True, default='uploads/default_image.webp', null=True, upload_to='uploads/images/'),
        ),
        migrations.AlterField(
            model_name='program',
            name='id',
            field=models.CharField(default='354e07be47d648099bd125eb0ad8d669', editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='resource',
            name='id',
            field=models.CharField(default='354e07be47d648099bd125eb0ad8d669', editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='resource',
            name='resource',
            field=backend.utils.fields.CustomFileField(blank=True, default='uploads/default_file.txt', null=True, upload_to='uploads/files/'),
        ),
        migrations.AlterField(
            model_name='session',
            name='id',
            field=models.CharField(default='354e07be47d648099bd125eb0ad8d669', editable=False, max_length=32, primary_key=True, serialize=False),
        ),
    ]
