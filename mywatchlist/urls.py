from django.urls import path
from mywatchlist.views import show_watchlist, show_watchlist_xml, show_item_by_id, show_watchlist_json, show_item_by_id_xml, show_item_by_id_json

app_name = 'mywatchlist'

urlpatterns = [
    # Utama
    path('html', show_watchlist, name='show_watchlist'),
    path('xml', show_watchlist_xml, name='show_wishlist_xml'),
    path('json', show_watchlist_json, name='show_wishlist_json'),
    # Alias
    path('', show_watchlist, name='show_watchlist'),
    path('html/', show_watchlist, name='show_watchlist'),
    path('xml/', show_watchlist_xml, name='show_wishlist_xml'),
    path('json/', show_watchlist_json, name='show_wishlist_json'),
    # ID sebagai pelengkap
    path('<int:id>', show_item_by_id, name='show_watchlist'),
    path('html/<int:id>', show_item_by_id, name='show_watchlist'),
    path('xml/<int:id>', show_item_by_id_xml, name='show_item_by_id_xml'),
    path('json/<int:id>', show_item_by_id_json, name='show_item_by_id_json'),
]