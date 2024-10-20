# Generated by Django 4.2.16 on 2024-10-19 18:57

import backend.utils.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ExternalTeamMember',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('title', models.CharField(max_length=100)),
                ('picture', backend.utils.fields.CustomImageField(blank=True, default='uploads/default_image.webp', null=True, upload_to='uploads/images/')),
                ('twitter', models.URLField(blank=True, max_length=255, null=True)),
                ('linked_in', models.URLField(blank=True, max_length=255, null=True)),
                ('order', models.IntegerField(default=1)),
            ],
            options={
                'ordering': ['order', 'name'],
            },
        ),
        migrations.CreateModel(
            name='ExternalTeamMemberBiography',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(blank=True, null=True)),
                ('order', models.IntegerField(default=1)),
                ('member', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='descriptions', to='externalTeam.externalteammember')),
            ],
            options={
                'ordering': ['order', 'id'],
            },
        ),
    ]