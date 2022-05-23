from django.http import HttpResponse
from rest_framework.viewsets import ReadOnlyModelViewSet, ModelViewSet

from .models import Feed, Item
from .serializers import ItemSerializer, FeedSerializer, UserSerializer
from rest_framework.response import Response
import feedparser
from django.utils.text import slugify
from time import mktime
from datetime import datetime
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.models import User
# Create your views here.
class FeedViewSet(ModelViewSet):
    serializer_class = FeedSerializer
    queryset = Feed.objects.all()
    permission_classes = [IsAuthenticated]
    
    def list(self, request):
        
        serializer_class = self.get_serializer(self.get_queryset(), many=True)
        return Response(serializer_class.data)

    def retrieve(self, request, pk=None):
        queryset = Item.objects.all().filter(feed__slug=pk)
        serializer_class = ItemSerializer(queryset, many=True)
        return Response(serializer_class.data)

class UpdateFeedsViewSet(ModelViewSet):
    serializer_class = FeedSerializer
    queryset = Feed.objects.all()
    permission_classes = [IsAuthenticated]
    
    def list(self, request):
        print("updating...")
        for feed in Feed.objects.all():
            print(">>>>>>>>>>>", feed)
            parsed_feed = feedparser.parse(feed.feed_url)
                # Save the feed items
            for entry in parsed_feed.entries:
                if all(k in entry for k in ("title", "link")):
                    title = entry.get('title')
                    if not title:
                        title = "Untitled"
                    
                    try:
                        feed_item = Item.objects.get(feed=feed, link=entry.link)
                        feed_item.title = title[:255]
                    except:
                        feed_item = Item(feed=feed, link=entry.link, title=title[:255])

                    feed_item.description = entry.get('description')
                    feed_item.slug = slugify(feed_item.title)
                    if 'published_parsed' in entry:
                        feed_item.published_on = datetime.fromtimestamp(mktime(entry.published_parsed))
                    print(feed_item)
                    feed_item.save()
        
        serializer_class = self.get_serializer(self.get_queryset(), many=True)
        return Response(serializer_class.data)

class ItemViewSet(ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [IsAuthenticated]

    def list(self, request):
        serializer_class = self.get_serializer(self.get_queryset(), many=True)
        return Response(serializer_class.data)

    def retrieve(self, request, pk=None):
        queryset = self.get_queryset().get(slug=pk)
        serializer_class = ItemSerializer(queryset)
        return Response(serializer_class.data)
    
    def partial_update(self, request, pk=None):
        instance = self.queryset.get(slug=pk)
        serializer = self.serializer_class(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer