from django.contrib import admin
from .models import Report

@admin.register(Report)
class ReportAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'date', 'symptoms', 'latitude', 'longitude', 'status', 'contact')
    search_fields = ('date', 'status', 'contact')
    list_filter = ('status', 'date')
