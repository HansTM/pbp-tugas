from django.contrib import admin
from .models import CatalogItem

class CatalogItemAdmin(admin.ModelAdmin):
	list_display = ['pk', 'item_name']
	list_display_links = ['pk', 'item_name']
	ordering = ['pk']
admin.site.register(CatalogItem, CatalogItemAdmin)
