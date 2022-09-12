from django.shortcuts import render
from katalog.models import CatalogItem

data_katalog = CatalogItem.objects.all()
context = {
	'list': data_katalog,
	'name': 'Hans TM',
	'id': '2106750295'
}

def show_catalog(request):
	return render(request, 'katalog.html', context)