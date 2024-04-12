# Generated by Django 5.0.4 on 2024-04-11 09:39

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0011_remove_person_district_remove_person_neighborhood_and_more'),
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
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='persons', to='task.region'),
        ),
        migrations.AddField(
            model_name='person',
            name='street',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='persons', to='task.street'),
            preserve_default=False,
        ),
    ]
