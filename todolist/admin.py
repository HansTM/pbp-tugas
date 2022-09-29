from django.contrib import admin
from .models import Task

class TaskAdmin(admin.ModelAdmin):
	list_display = ['pk', 'title', 'user']
	list_display_links = ['pk', 'title']
	ordering = ['pk']
admin.site.register(Task, TaskAdmin)
