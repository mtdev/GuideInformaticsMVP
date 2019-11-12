from django.db import models

class Sample(models.Model):
    name = models.TextField()

class RawFile(models.Model):
    username = models.TextField()
    filename = models.TextField()
    raw_data = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
