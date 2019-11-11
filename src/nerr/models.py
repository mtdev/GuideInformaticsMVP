from django.db import models

class RawFile(models.Model):
    name = models.TextField()
    raw_data = models.TextField()
