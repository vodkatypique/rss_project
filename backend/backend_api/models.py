from django.db import models
from django.conf import settings


# Create your models here.
class Feed(models.Model):
    """
    Represents a feed in RSS, or any other format.
    """
    title = models.CharField(max_length=255, default="Untitled")
    feed_url = models.CharField(unique=True, blank=False, max_length=500)
    description = models.TextField(blank=True)
    updated_on = models.DateTimeField(blank=True, null=True)
    slug = models.SlugField(unique=True)

    objects = models.Manager()

    class Meta:
        ordering = ['title']

    def __str__(self):
        return self.title


class Item(models.Model):
    feed = models.ForeignKey(Feed, on_delete=models.CASCADE)
    title = models.CharField(max_length=255, default="Untitled")
    link = models.URLField(max_length=500)
    description = models.TextField(blank=True)
    published_on = models.DateTimeField(blank=True, null=True)
    slug = models.SlugField(unique=True)

 
    read = models.BooleanField(default=False)
    mark = models.BooleanField(default=False)
   
    objects = models.Manager()

    class Meta:
        ordering = ['-published_on']
   
    def __str__(self):
        return self.title
