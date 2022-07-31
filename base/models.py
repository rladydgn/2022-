from django.db import models


class FightRecord(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    register = models.CharField(max_length=100)
    date = models.CharField(max_length=100)
    region = models.CharField(max_length=100)
    person = models.CharField(max_length=100)
    source = models.CharField(max_length=100)


class MilitaryTerm(models.Model):
    menu = models.CharField(max_length=50)
    museum_code = models.CharField(max_length=50)
    title = models.CharField(max_length=100)
    content = models.TextField()
    register = models.CharField(max_length=50)
    standard = models.CharField(max_length=50, null=True)
    outline = models.CharField(max_length=100, null=True)