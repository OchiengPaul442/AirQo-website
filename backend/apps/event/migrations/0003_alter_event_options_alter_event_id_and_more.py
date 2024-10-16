# Generated by Django 4.2.16 on 2024-10-11 08:24

import apps.event.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0002_remove_session_program_session_event'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='event',
            options={'ordering': ['order', '-start_date']},
        ),
        migrations.AlterField(
            model_name='event',
            name='id',
            field=models.CharField(default=apps.event.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='event',
            name='unique_title',
            field=models.CharField(blank=True, max_length=100, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='inquiry',
            name='event',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='inquiries', to='event.event'),
        ),
        migrations.AlterField(
            model_name='inquiry',
            name='id',
            field=models.CharField(default=apps.event.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='partnerlogo',
            name='event',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='partner_logos', to='event.event'),
        ),
        migrations.AlterField(
            model_name='partnerlogo',
            name='id',
            field=models.CharField(default=apps.event.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='program',
            name='event',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='programs', to='event.event'),
        ),
        migrations.AlterField(
            model_name='program',
            name='id',
            field=models.CharField(default=apps.event.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='resource',
            name='event',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='resources', to='event.event'),
        ),
        migrations.AlterField(
            model_name='resource',
            name='id',
            field=models.CharField(default=apps.event.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='session',
            name='event',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='sessions', to='event.event'),
        ),
        migrations.AlterField(
            model_name='session',
            name='id',
            field=models.CharField(default=apps.event.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
    ]
