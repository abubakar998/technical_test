# Generated by Django 3.2.9 on 2021-12-10 13:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_alter_product_bathrooms'),
    ]

    operations = [
        migrations.RenameField(
            model_name='productimages',
            old_name='photo',
            new_name='image',
        ),
    ]
