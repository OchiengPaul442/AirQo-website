# Generated by Django 4.2.16 on 2024-10-10 16:37

import cloudinary.models
from django.db import migrations, models
import django.db.models.deletion
import django_extensions.db.fields
import django_quill.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('is_deleted', models.BooleanField(default=False)),
                ('title', models.CharField(max_length=100)),
                ('title_subtext', models.CharField(max_length=90)),
                ('start_date', models.DateField()),
                ('end_date', models.DateField(blank=True, null=True)),
                ('start_time', models.TimeField(blank=True, null=True)),
                ('end_time', models.TimeField(blank=True, null=True)),
                ('registration_link', models.URLField(blank=True, null=True)),
                ('unique_title', models.CharField(blank=True, max_length=100, null=True)),
                ('website_category', models.CharField(blank=True, choices=[('airqo', 'AirQo'), ('cleanair', 'CleanAir')], default='airqo', max_length=40, null=True)),
                ('event_tag', models.CharField(blank=True, choices=[('none', 'None'), ('featured', 'Featured')], default='none', max_length=40, null=True)),
                ('event_category', models.CharField(blank=True, choices=[('none', 'None'), ('webinar', 'Webinar'), ('workshop', 'Workshop'), ('marathon', 'Marathon'), ('conference', 'Conference'), ('summit', 'Summit'), ('commemoration', 'Commemoration'), ('in-person', 'In-person'), ('hybrid', 'Hybrid')], default='none', max_length=40, null=True)),
                ('event_image', cloudinary.models.CloudinaryField(max_length=255, verbose_name='EventImage')),
                ('background_image', cloudinary.models.CloudinaryField(max_length=255, verbose_name='BackgroundImage')),
                ('location_name', models.CharField(blank=True, max_length=100, null=True)),
                ('location_link', models.URLField(blank=True, null=True)),
                ('event_details', django_quill.fields.QuillField()),
                ('order', models.IntegerField(default=1)),
            ],
            options={
                'ordering': ['order', '-id'],
            },
        ),
        migrations.CreateModel(
            name='Program',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('is_deleted', models.BooleanField(default=False)),
                ('date', models.DateField()),
                ('program_details', django_quill.fields.QuillField(blank=True, null=True)),
                ('order', models.IntegerField(default=1)),
                ('event', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='program', to='event.event')),
            ],
            options={
                'ordering': ['order'],
            },
        ),
        migrations.CreateModel(
            name='Session',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('is_deleted', models.BooleanField(default=False)),
                ('start_time', models.TimeField()),
                ('end_time', models.TimeField()),
                ('venue', models.CharField(blank=True, max_length=80, null=True)),
                ('session_title', models.CharField(max_length=150)),
                ('session_details', django_quill.fields.QuillField()),
                ('order', models.IntegerField(default=1)),
                ('program', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='session', to='event.program')),
            ],
            options={
                'ordering': ['order'],
            },
        ),
        migrations.CreateModel(
            name='Resource',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('is_deleted', models.BooleanField(default=False)),
                ('title', models.CharField(max_length=100)),
                ('link', models.URLField(blank=True, null=True)),
                ('resource', cloudinary.models.CloudinaryField(max_length=255, verbose_name='File')),
                ('order', models.IntegerField(default=1)),
                ('event', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='resource', to='event.event')),
            ],
            options={
                'ordering': ['order'],
            },
        ),
        migrations.CreateModel(
            name='PartnerLogo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('is_deleted', models.BooleanField(default=False)),
                ('partner_logo', cloudinary.models.CloudinaryField(max_length=255, verbose_name='PartnerImage')),
                ('name', models.CharField(max_length=70)),
                ('order', models.IntegerField(default=1)),
                ('event', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='partner', to='event.event')),
            ],
            options={
                'ordering': ['order'],
            },
        ),
        migrations.CreateModel(
            name='Inquiry',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('is_deleted', models.BooleanField(default=False)),
                ('inquiry', models.CharField(max_length=80)),
                ('role', models.CharField(blank=True, max_length=100, null=True)),
                ('email', models.EmailField(max_length=254)),
                ('order', models.IntegerField(default=1)),
                ('event', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='inquiry', to='event.event')),
            ],
            options={
                'ordering': ['order'],
            },
        ),
    ]