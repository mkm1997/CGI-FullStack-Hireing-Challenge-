from django.db import models

# Create your models here.


class Game(models.Model):
    title = models.CharField(max_length=500)
    platform = models.CharField(max_length=500)
    score = models.CharField(max_length=500)
    genre  = models.CharField(max_length=500)
    editor_choice = models.CharField(max_length=10)
    def __str__(self):
        return self.title