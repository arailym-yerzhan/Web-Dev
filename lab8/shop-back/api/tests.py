from django.test import TestCase
from .models import Category, Product

class CategoryModelTest(TestCase):
    def setUp(self):
        self.category = Category.objects.create(name='Electronics')

    def test_category_creation(self):
        self.assertEqual(self.category.name, 'Electronics')

class ProductModelTest(TestCase):
    def setUp(self):
        self.category = Category.objects.create(name='Electronics')
        self.product = Product.objects.create(name='Laptop', category=self.category)

    def test_product_creation(self):
        self.assertEqual(self.product.name, 'Laptop')
        self.assertEqual(self.product.category, self.category)

    def test_product_category_relationship(self):
        self.assertEqual(self.product.category.name, 'Electronics')