import { Component, inject, OnInit } from '@angular/core';
import { signal } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Kaspi Online Store';
  
  private productService = inject(ProductService);
  
  categories = signal<Category[]>([]);
  selectedCategoryId = signal<number | null>(null);
  products = signal<Product[]>([]);

  ngOnInit(): void {
    this.categories.set(this.productService.getCategories());
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId.set(categoryId);
    const categoryProducts = this.productService.getProductsByCategory(categoryId);
    this.products.set([...categoryProducts]);
  }
}
