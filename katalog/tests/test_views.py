from django.test import TestCase, Client
from django.urls import resolve

class ViewsTest(TestCase):
	def test_exists(self):
		response = Client().get('/')
		self.assertEqual(response.status_code, 200)

	def test_use_template(self):
		response = Client().get('/')
		self.assertTemplateUsed(response, 'katalog.html')