from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from . import api

urlpatterns = [
    path('me/', api.me, name='me'),
    path('api/login/', api.login, name='login'),
    path('signup/', api.signup, name='signup'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('update-profile/', api.update_profile, name='update_profile'),  # Nouvelle URL pour mettre à jour le profil
    path('api/users/', api.UserListCreateView.as_view(), name='user-list-create'),  # Pour POST et GET (création et récupération)
    path('api/users/<str:pk>/', api.UserRetrieveUpdateDeleteView.as_view(), name='user-detail')
 # Pour GET, PUT, DELETE sur un utilisateur spécifique

]
