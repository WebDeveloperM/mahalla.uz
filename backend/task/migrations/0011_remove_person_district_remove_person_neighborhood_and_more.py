# Generated by Django 5.0.4 on 2024-04-11 08:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0010_person_district_person_neighborhood_person_region_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='person',
            name='district',
        ),
        migrations.RemoveField(
            model_name='person',
            name='neighborhood',
        ),
        migrations.RemoveField(
            model_name='person',
            name='region',
        ),
        migrations.RemoveField(
            model_name='person',
            name='street',
        ),
    ]
