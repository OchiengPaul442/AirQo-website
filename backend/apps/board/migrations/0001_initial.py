# Generated by Django 4.2.16 on 2024-10-11 21:49

import apps.board.models
from django.db import migrations, models
import django.db.models.deletion
import django_extensions.db.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BoardMember',
            fields=[
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('is_deleted', models.BooleanField(default=False)),
                ('id', models.CharField(default=apps.board.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('title', models.CharField(max_length=100)),
                ('picture', models.ImageField(upload_to='board/')),
                ('twitter', models.URLField(blank=True, max_length=255, null=True)),
                ('linked_in', models.URLField(blank=True, max_length=255, null=True)),
                ('order', models.IntegerField(default=1)),
            ],
            options={
                'ordering': ['order', 'name'],
            },
        ),
        migrations.CreateModel(
            name='BoardMemberBiography',
            fields=[
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('is_deleted', models.BooleanField(default=False)),
                ('id', models.CharField(default=apps.board.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False)),
                ('description', models.TextField(blank=True, null=True)),
                ('order', models.IntegerField(default=1)),
                ('member', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='descriptions', to='board.boardmember')),
            ],
            options={
                'ordering': ['order', 'id'],
            },
        ),
    ]
