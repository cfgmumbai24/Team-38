from django.db import models

# Create your models here.

class Video(models.Model):
    url=models.CharField(max_length=100)
    title=models.CharField(max_length=100)
    author=models.CharField(max_length=100)
    category=models.ForeignKey('Category',on_delete=models.CASCADE)


class Category(models.Model):
    name=models.CharField(max_length=100)
    def __str__(self):
        return self.name
    