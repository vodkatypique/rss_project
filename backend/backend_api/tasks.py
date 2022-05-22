from .models import Feed, Item
import feedparser
from django.utils.text import slugify
from time import mktime
from datetime import datetime


def update():
    print("updating...")
    for feed in Feed.objects.all():
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
                    
                feed_item.save()