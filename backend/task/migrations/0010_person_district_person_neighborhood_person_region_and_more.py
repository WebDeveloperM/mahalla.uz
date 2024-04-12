# Generated by Django 5.0.4 on 2024-04-11 07:27

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0009_house_district_house_neighborhood_house_region_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='district',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='persons', to='task.district'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='person',
            name='neighborhood',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='persons', to='task.neighborhood'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='person',
            name='region',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='persons', to='task.region'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='person',
            name='street',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='persons', to='task.street'),
            preserve_default=False,
        ),
    ]
