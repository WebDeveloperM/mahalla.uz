# Generated by Django 5.0.4 on 2024-04-08 06:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0003_remove_house_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='person',
            name='appartment',
        ),
        migrations.AlterField(
            model_name='person',
            name='time_registered',
            field=models.DateField(),
        ),
    ]