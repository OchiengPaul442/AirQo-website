# Generated by Django 4.2.16 on 2024-10-10 07:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('press', '0002_press_created_by_press_modified_by'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='press',
            options={'ordering': ['order', '-id'], 'verbose_name': 'Press Article', 'verbose_name_plural': 'Press Articles'},
        ),
    ]