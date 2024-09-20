import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { CatalogService } from '../catalog.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private cataloService: CatalogService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.products = this.route.snapshot.data['products'] || [];
    //this.loadProducts();
  }

  // no need since we using Resolver.
  // loadProducts() {
  //   this.isLoading = true;
  //   this.cataloService.getProducts().subscribe(
  //     (data: Product[]) => {
  //       console.log(data);
  //       this.products = data;
  //       this.isLoading = false;
  //     },
  //     (error) => {
  //       this.errorMessage = error;
  //       this.isLoading = false;
  //     }
  //   );
  // }
}
