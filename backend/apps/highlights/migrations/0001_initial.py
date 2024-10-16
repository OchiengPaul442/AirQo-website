# Generated by Django 4.2.16 on 2024-10-11 14:09

import apps.highlights.models
import cloudinary.models
from django.db import migrations, models
import django_extensions.db.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('is_deleted', models.BooleanField(default=False)),
                ('id', models.CharField(default=apps.highlights.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=20)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Highlight',
            fields=[
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('is_deleted', models.BooleanField(default=False)),
                ('id', models.CharField(default=apps.highlights.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=110)),
                ('image', cloudinary.models.CloudinaryField(max_length=255, verbose_name='Image')),
                ('link', models.URLField()),
                ('link_title', models.CharField(blank=True, max_length=20)),
                ('order', models.IntegerField(default=1)),
                ('tags', models.ManyToManyField(related_name='highlights', to='highlights.tag')),
            ],
            options={
                'ordering': ['order', '-id'],
            },
        ),
    ]
