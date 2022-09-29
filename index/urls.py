from django.urls import path
from .views import redirect_to_github

app_name = 'index'

urlpatterns = [
	path('', redirect_to_github, name='redirect_to_github'),
]