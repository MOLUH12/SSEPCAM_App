from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import User
from .serializers import UserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from .forms import SignupForm, ProfileForm  # Assure-toi que ces formulaires existent

# Vue pour lister et créer des utilisateurs
class UserListCreateView(APIView):
    permission_classes = [IsAuthenticated, IsAdminUser]

    # Lister tous les utilisateurs
    def get(self, request):
        print("GET request received at /api/users/")
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    # Créer un nouvel utilisateur
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Vue pour récupérer, mettre à jour et supprimer un utilisateur spécifique
class UserRetrieveUpdateDeleteView(APIView):
    permission_classes = [IsAuthenticated, IsAdminUser]

    # Récupérer les détails d'un utilisateur spécifique
    def get(self, request, pk):
        try:
            user = User.objects.get(pk=pk)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        serializer = UserSerializer(user)
        return Response(serializer.data)

    # Mettre à jour un utilisateur
    def put(self, request, pk):
        try:
            user = User.objects.get(pk=pk)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Supprimer un utilisateur
    def delete(self, request, pk):
        try:
            user = User.objects.get(pk=pk)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        user.delete()
        return Response({'message': 'User deleted successfully'}, status=status.HTTP_204_NO_CONTENT)

# Vue pour la connexion
@api_view(['POST'])
@authentication_classes([])
@permission_classes([])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = authenticate(username=email, password=password)
    if user is not None:
        if user.is_active:
            refresh = RefreshToken.for_user(user)
            return JsonResponse({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
        else:
            return JsonResponse({'error': 'User is not activated!'}, status=403)
    return JsonResponse({'error': 'Invalid email or password!'}, status=401)

# Vue pour obtenir les détails de l'utilisateur actuel
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def me(request):
    return JsonResponse({
        'id': str(request.user.id),
        'name': request.user.name,
        'email': request.user.email,
        'role': request.user.role,
    })

# Vue pour l'inscription
@api_view(['POST'])
@authentication_classes([])
@permission_classes([])
def signup(request):
    data = request.data
    message = 'success'

    form = SignupForm({
        'email': data.get('email'),
        'name': data.get('name'),
        'password1': data.get('password1'),
        'password2': data.get('password2'),
        'role': data.get('role', 'Formation Sanitaire')
    })

    if form.is_valid():
        form.save()
    else:
        message = 'error'

    return JsonResponse({'message': message})

# Vue pour mettre à jour le profil
@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def update_profile(request):
    user = request.user

    if request.method == 'GET':
        return JsonResponse({
            'id': str(user.id),
            'name': user.name,
            'email': user.email,
            'role': user.role,
            'avatar': user.avatar.url if user.avatar else None,
        })

    if request.method == 'PUT':
        form = ProfileForm(request.data, instance=user)
        if form.is_valid():
            form.save()
            return JsonResponse({'message': 'Profile updated successfully.'})
        return JsonResponse({'error': 'Invalid data'}, status=400)
