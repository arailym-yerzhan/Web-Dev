import { Component, input, signal, effect } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = input.required<Product[]>();
  localProducts = signal<Product[]>([]);

  constructor() {
    effect(() => {
      this.localProducts.set([...this.products()]);
    });
  }

  onDeleteProduct(productId: number): void {
    this.localProducts.update(products => 
      products.filter(p => p.id !== productId)
    );
  }
}
