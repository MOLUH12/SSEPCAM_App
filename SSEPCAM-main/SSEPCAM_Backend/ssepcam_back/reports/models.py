from django.db import models

class Report(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, default='di')  # Nouveau champ ajouté
    latitude = models.FloatField()
    longitude = models.FloatField()
    symptoms = models.TextField()
    date = models.DateField()
    contact = models.CharField(max_length=15, blank=True)
    status = models.CharField(max_length=10, choices=[('validé', 'Validé'), ('invalidé', 'Invalidé')], default='invalidé')

    def __str__(self):
        return f'Report {self.id} - {self.date}'
