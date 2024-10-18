# Generated by Django 4.2.16 on 2024-10-17 20:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0013_alter_event_id_alter_inquiry_id_alter_partnerlogo_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='id',
            field=models.CharField(default='5053964c21734deb85bccd6bf43f61af', editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='inquiry',
            name='id',
            field=models.CharField(default='5053964c21734deb85bccd6bf43f61af', editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='partnerlogo',
            name='id',
            field=models.CharField(default='5053964c21734deb85bccd6bf43f61af', editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='program',
            name='id',
            field=models.CharField(default='5053964c21734deb85bccd6bf43f61af', editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='resource',
            name='id',
            field=models.CharField(default='5053964c21734deb85bccd6bf43f61af', editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='session',
            name='id',
            field=models.CharField(default='5053964c21734deb85bccd6bf43f61af', editable=False, max_length=32, primary_key=True, serialize=False),
        ),
    ]