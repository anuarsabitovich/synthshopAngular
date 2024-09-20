import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from '../catalog.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  product: Product | null = null;
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private catalogService: CatalogService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.getProduct(productId);
    }
  }

  getProduct(productId: string): void {
    this.isLoading = true;
    this.catalogService.getProductById(productId).subscribe(
      (data: Product) => {
        this.product = data;
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to load product details';
        this.isLoading = false;
      }
    );
  }
}
