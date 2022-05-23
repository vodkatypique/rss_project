from django.urls import path
from rest_framework.routers import DefaultRouter
from backend_api import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = DefaultRouter()
router.register(r'feeds', views.FeedViewSet, basename='feed')
router.register(r'items', views.ItemViewSet, basename='item')
router.register(r'update', views.UpdateFeedsViewSet , basename='update')
router.register(r'users', views.UserViewSet, basename='users')
   
urlpatterns = router.urls + [path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),]

