from django.contrib import admin
from .models import MyWatchlist

class MyWatchlistAdmin(admin.ModelAdmin):
	list_display = ['pk', 'title',]
	list_display_links = ['pk', 'title']
	ordering = ['pk']
admin.site.register(MyWatchlist, MyWatchlistAdmin)
