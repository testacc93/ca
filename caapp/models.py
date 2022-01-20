from django.db import models

class Service(models.Model):
    name = models.CharField(max_length=256)
    overview = models.TextField()

    def __str__(self):
        return self.name


class Subservice(models.Model):
    name = models.CharField(max_length=256)
    parent_service = models.ForeignKey(Service, on_delete=models.CASCADE)
    overview = models.TextField(default='Taxation')

    def __str__(self):
        return self.name

