# Generated by Django 5.0.4 on 2024-04-12 11:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0016_alter_person_district_alter_person_house_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='age',
            field=models.CharField(blank=True, null=True),
        ),
    ]
