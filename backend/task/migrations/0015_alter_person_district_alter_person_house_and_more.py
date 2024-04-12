# Generated by Django 5.0.4 on 2024-04-11 09:58

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0014_alter_person_district_alter_person_house_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='person',
            name='district',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='persons', to='task.district'),
        ),
        migrations.AlterField(
            model_name='person',
            name='house',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='persons', to='task.house'),
        ),
        migrations.AlterField(
            model_name='person',
            name='neighborhood',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='persons', to='task.neighborhood'),
        ),
        migrations.AlterField(
            model_name='person',
            name='region',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='persons', to='task.region'),
        ),
        migrations.AlterField(
            model_name='person',
            name='street',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='persons', to='task.street'),
        ),
    ]