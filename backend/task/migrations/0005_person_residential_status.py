# Generated by Django 5.0.4 on 2024-04-08 16:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0004_remove_person_appartment_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='residential_status',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
    ]