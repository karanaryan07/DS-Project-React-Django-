from django.db import models

# Create your models here.

class Data(models.Model):
    title = models.CharField(max_length=120 , null=False)
    model_type = models.CharField(max_length=120 , null=False , default=None)
    file_type = models.FileField(null=True, default=None)

    def __str__(self):
        return self.title
    