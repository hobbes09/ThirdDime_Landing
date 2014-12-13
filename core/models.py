from django.db import models


class Dali(models.Model):
    one = models.IntegerField(default=0)
    two = models.IntegerField(default=0)
    three = models.IntegerField(default=0)
    four = models.IntegerField(default=0)


class Thought(models.Model):
    thought = models.TextField()
    name = models.CharField(max_length=50)


class Adopter(models.Model):
    email = models.EmailField()
