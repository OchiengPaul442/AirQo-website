# Generated by Django 4.2.16 on 2024-10-18 09:10

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('event', '0015_alter_event_id_alter_inquiry_id_alter_partnerlogo_id_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='created_by',
        ),
        migrations.RemoveField(
            model_name='event',
            name='modified_by',
        ),
        migrations.RemoveField(
            model_name='inquiry',
            name='created_by',
        ),
        migrations.RemoveField(
            model_name='inquiry',
            name='modified_by',
        ),
        migrations.RemoveField(
            model_name='partnerlogo',
            name='created_by',
        ),
        migrations.RemoveField(
            model_name='partnerlogo',
            name='modified_by',
        ),
        migrations.RemoveField(
            model_name='program',
            name='created_by',
        ),
        migrations.RemoveField(
            model_name='program',
            name='modified_by',
        ),
        migrations.RemoveField(
            model_name='resource',
            name='created_by',
        ),
        migrations.RemoveField(
            model_name='resource',
            name='modified_by',
        ),
        migrations.RemoveField(
            model_name='session',
            name='created_by',
        ),
        migrations.RemoveField(
            model_name='session',
            name='modified_by',
        ),
        migrations.AddField(
            model_name='event',
            name='authored_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='authored_%(class)s_objects', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='inquiry',
            name='authored_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='authored_%(class)s_objects', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='partnerlogo',
            name='authored_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='authored_%(class)s_objects', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='program',
            name='authored_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='authored_%(class)s_objects', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='resource',
            name='authored_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='authored_%(class)s_objects', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='session',
            name='authored_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='authored_%(class)s_objects', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='event',
            name='id',
            field=models.CharField(editable=False, max_length=32, primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='inquiry',
            name='id',
            field=models.CharField(editable=False, max_length=32, primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='partnerlogo',
            name='id',
            field=models.CharField(editable=False, max_length=32, primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='program',
            name='id',
            field=models.CharField(editable=False, max_length=32, primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='resource',
            name='id',
            field=models.CharField(editable=False, max_length=32, primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='session',
            name='id',
            field=models.CharField(editable=False, max_length=32, primary_key=True, serialize=False, unique=True),
        ),
    ]