# Generated by Django 5.0.4 on 2024-04-07 20:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0002_remove_district_created_at_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='house',
            name='name',
        ),
    ]