from rest_framework.routers import DefaultRouter
from backend_api import views

router = DefaultRouter()
router.register(r'feeds', views.FeedViewSet, basename='feed')
router.register(r'items', views.ItemViewSet, basename='item')
urlpatterns = router.urls
