from django.shortcuts import render
from mywatchlist.models import MyWatchlist
from django.http import HttpResponse
from django.core import serializers

def show_watchlist(request):
	data = MyWatchlist.objects.all()

	watched = sum(map(lambda x: x.watched, data))
	not_watched = len(data) - watched

	context = {
		'list': data,
		# 'name': 'Hans TM',
		# 'id': '2106750295',
		'distiction': watched >= not_watched
	}


	return render(request, 'watchlist.html', context)

def show_watchlist_xml(request):

    data = MyWatchlist.objects.all()

    return HttpResponse(serializers.serialize("xml", data), content_type="application/xml")

def show_watchlist_json(request):

    data = MyWatchlist.objects.all()

    return HttpResponse(serializers.serialize("json", data), content_type="application/json")

def show_item_by_id_xml(request, id):

    data = MyWatchlist.objects.filter(pk=id)

    return HttpResponse(serializers.serialize("xml", data), content_type="application/xml")

def show_item_by_id_json(request, id):

    data = MyWatchlist.objects.filter(pk=id)

    return HttpResponse(serializers.serialize("json", data), content_type="application/json")
