import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';
import { ShortenPipe } from '../pipes/shorten.pipe';
import { HoverBigDirective } from '../directives/hover-big.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, ShortenPipe, ShortenPipe, HoverBigDirective],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private router: Router) {}

  navigateToProduct() {
    this.router.navigate(['product', this.product.productID]);
  }
}
