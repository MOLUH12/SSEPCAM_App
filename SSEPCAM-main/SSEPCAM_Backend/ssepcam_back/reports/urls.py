from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .api import ReportViewSet

# Création d'un routeur pour le ViewSet
router = DefaultRouter()
router.register(r'reports', ReportViewSet, basename='report')

urlpatterns = [
    path('api/', include(router.urls)),
]
