from rest_framework.viewsets import ReadOnlyModelViewSet

from .tasks import update

from .models import Feed, Item
from .serializers import ItemSerializer, FeedSerializer
from rest_framework.response import Response


# Create your views here.
class FeedViewSet(ReadOnlyModelViewSet):
    serializer_class = FeedSerializer
    queryset = Feed.objects.all()
    
    def list(self, request):
        update()
        serializer_class = self.get_serializer(self.get_queryset(), many=True)
        return Response(serializer_class.data)

    def retrieve(self, request, pk=None):
        queryset = Item.objects.all().filter(feed__slug=pk)
        serializer_class = ItemSerializer(queryset, many=True)
        return Response(serializer_class.data)


class ItemViewSet(ReadOnlyModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

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