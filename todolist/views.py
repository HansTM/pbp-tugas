from django.shortcuts import render
from todolist.models import Task
from django.http import HttpResponse
from django.core import serializers
from django.shortcuts import redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout, get_user
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import requires_csrf_token
import datetime
from django.http import HttpResponseRedirect
from django.urls import reverse
from .forms import TaskForm

@login_required(login_url='/todolist/login')
@requires_csrf_token
def show_todolist(request):
	
	if request.method == "POST":
		pk = request.POST['id']
		action = request.POST['action']
		task = Task.objects.filter(pk=pk)[0]
		if action == 'done':
			task.is_finished = True
			task.save()
			messages.success(request, 'Task telah berhasil diperbarui!')
		elif action == 'undone':
			task.is_finished = False
			task.save()
			messages.success(request, 'Task telah berhasil diperbarui!')
		elif action == 'delete':
			task.delete()
			messages.success(request, 'Task telah berhasil dihapus!')

	data = Task.objects.filter(user=request.user)

	context = {
		'data': data,
		# 'last_login': request.COOKIES['last_login'],
	}

	return render(request, "todolist.html", context)

@login_required(login_url='/todolist/login')
def create_task(request):
	form = TaskForm()

	if request.method == "POST":
		form = TaskForm(request.POST, instance=Task())
		if form.is_valid():
			to_save = form.save(commit=False)
			to_save.user = request.user
			to_save.date = datetime.date.today()
			to_save.is_finished = False
			to_save.save()
			form.save_m2m()
			messages.success(request, 'Task telah berhasil ditambah!')
			return redirect('todolist:todolist')
	
	context = {
		'form': form,
		# 'last_login': request.COOKIES['last_login'],
	}
	return render(request, 'create-task.html', context)

def register(request):
	form = UserCreationForm()

	if request.method == "POST":
		form = UserCreationForm(request.POST)
		if form.is_valid():
			form.save()
			messages.success(request, 'Akun telah berhasil dibuat!')
			return redirect('todolist:login')
	
	context = {'form':form}
	return render(request, 'register.html', context)

def login_user(request):
	if request.method == 'POST':
		username = request.POST.get('username')
		password = request.POST.get('password')
		user = authenticate(request, username=username, password=password)
		if user is not None:
			login(request, user)
			response = HttpResponseRedirect(reverse("todolist:todolist"))
			# response.set_cookie('last_login', str(datetime.datetime.now())) # membuat cookie last_login dan menambahkannya ke dalam response
			return response
		else:
			messages.info(request, 'Username atau password salah!')
	context = {}
	return render(request, 'login.html', context)

def logout_user(request):
	logout(request)
	response = HttpResponseRedirect(reverse('todolist:login'))
	# response.delete_cookie('last_login')
	messages.info(request, 'Berhasil keluar!')
	return response