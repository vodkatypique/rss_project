from django.contrib import admin
from .models import Feed, Item


# Register your models here.
@admin.register(Feed)
class FeedAdmin(admin.ModelAdmin):
    model = Feed
    prepopulated_fields = {"slug": ("title",)}
    
@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    model = Item
    prepopulated_fields = {"slug": ("title",)}

