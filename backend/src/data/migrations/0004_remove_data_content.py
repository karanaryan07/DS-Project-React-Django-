# Generated by Django 3.0.7 on 2020-06-03 19:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0003_data_model_type'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='data',
            name='content',
        ),
    ]
