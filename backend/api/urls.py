from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TestModelViewSet

router = DefaultRouter()
router.register(r"testmodel", TestModelViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
