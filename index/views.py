from django.shortcuts import render, redirect

def redirect_to_github(request):
	return redirect('//github.com/HansTM/pbp-tugas#readme')