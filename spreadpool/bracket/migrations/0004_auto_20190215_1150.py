# Generated by Django 2.1.2 on 2019-02-15 17:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bracket', '0003_team_region'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='is_staff',
            field=models.IntegerField(),
        ),
    ]