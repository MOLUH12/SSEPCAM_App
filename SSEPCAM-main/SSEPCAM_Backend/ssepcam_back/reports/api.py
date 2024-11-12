from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status as rest_status
from .models import Report
from .serializers import ReportSerializer

class ReportViewSet(viewsets.ModelViewSet):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer

    def get_permissions(self):
        # Permettre à n'importe qui de soumettre un rapport
        if self.action == 'create':
            return [AllowAny()]
        # Seuls les utilisateurs authentifiés peuvent lister, récupérer, mettre à jour ou valider/invalider un rapport
        if self.action in ['list', 'retrieve', 'update', 'partial_update', 'validate_case', 'invalidate_case']:
            return [IsAuthenticated()]
        # Par défaut, appliquer IsAuthenticated
        return [IsAuthenticated()]

    @action(detail=True, methods=['post'], permission_classes=[IsAuthenticated])
    def validate_case(self, request, pk=None):
        """Valider un cas suspect"""
        try:
            report = self.get_object()
            report.status = 'validé'
            report.save()
            return Response({'status': 'Cas validé'}, status=rest_status.HTTP_200_OK)
        except Report.DoesNotExist:
            return Response({'error': 'Rapport non trouvé'}, status=rest_status.HTTP_404_NOT_FOUND)

    @action(detail=True, methods=['post'], permission_classes=[IsAuthenticated])
    def invalidate_case(self, request, pk=None):
        """Invalider un cas suspect"""
        try:
            report = self.get_object()
            report.status = 'invalidé'
            report.save()
            return Response({'status': 'Cas invalidé'}, status=rest_status.HTTP_200_OK)
        except Report.DoesNotExist:
            return Response({'error': 'Rapport non trouvé'}, status=rest_status.HTTP_404_NOT_FOUND)
