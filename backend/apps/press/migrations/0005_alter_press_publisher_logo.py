# Generated by Django 4.2.16 on 2024-10-11 19:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('press', '0004_alter_press_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='press',
            name='publisher_logo',
            field=models.FileField(blank=True, null=True, upload_to='press/logos/'),
        ),
    ]