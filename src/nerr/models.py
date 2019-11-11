from django.db import models

class RawFile(models.Model):
    name = models.TextField()
    file_name = models.TextField()
    raw_data = models.TextField()
