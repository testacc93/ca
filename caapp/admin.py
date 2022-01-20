from django.contrib import admin
from .models import Service, Subservice

class ServiceAdmin(admin.ModelAdmin):
    list_display = ['id', 'name',]

admin.site.register(Service, ServiceAdmin)


class SubserviceAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'parent_service']

admin.site.register(Subservice, SubserviceAdmin)
