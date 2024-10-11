# Generated by Django 4.2.16 on 2024-10-11 19:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0007_alter_event_background_image_alter_event_event_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='partnerlogo',
            name='partner_logo',
            field=models.FileField(blank=True, null=True, upload_to='events/logos/'),
        ),
        migrations.AlterField(
            model_name='resource',
            name='resource',
            field=models.FileField(blank=True, null=True, upload_to='publications/files/'),
        ),
    ]
