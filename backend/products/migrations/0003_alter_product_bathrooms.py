# Generated by Django 3.2.9 on 2021-12-09 13:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_auto_20211209_0606'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='bathrooms',
            field=models.IntegerField(),
        ),
    ]