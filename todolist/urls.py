from django.urls import path
from todolist.views import show_todolist, register, login_user, logout_user, create_task, show_todolist_json, show_todolist_ajax, api_done, api_undone, api_delete

app_name = 'todolist'

urlpatterns = [
	path('', show_todolist_ajax, name='todolist'),
	path('login', login_user, name='login'),
	path('register', register, name='register'),
	path('create-task', create_task, name='create_task'),
	path('logout', logout_user, name='logout'),
	path('old', show_todolist, name='todolist_old'),
	path('json', show_todolist_json, name='todolist_json'),

	# API (no prefix)
	path('done/<int:id>', api_done, name="api_done"),
	path('undone/<int:id>', api_undone, name="api_undone"),
	path('delete/<int:id>', api_delete, name="api_delete"),

	# API (api/ prefix)
	path('api/done/<int:id>', api_done, name="api_done_2"),
	path('api/undone/<int:id>', api_undone, name="api_undone_2"),
	path('api/delete/<int:id>', api_delete, name="api_delete_2"),

]