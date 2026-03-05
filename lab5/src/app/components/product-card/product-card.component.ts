import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  product = input.required<Product>();
  delete = output<number>();

  onLike(): void {
    this.product().likes++;
  }

  onDelete(): void {
    this.delete.emit(this.product().id);
  }

  shareWhatsApp(): void {
    const text = `Посмотри этот товар в Каспи: ${this.product().name} - ${this.product().link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  shareTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product().link)}&text=${encodeURIComponent(this.product().name)}`;
    window.open(url, '_blank');
  }

  openProduct(): void {
    window.open(this.product().link, '_blank');
  }

  renderStars(rating: number): string {
    const filled = Math.floor(rating);
    const empty = 5 - filled;
    return '★'.repeat(filled) + '☆'.repeat(empty);
  }
}
