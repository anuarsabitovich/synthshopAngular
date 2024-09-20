import { Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductResolverService } from './product-resolver.service';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogComponent,
    resolve: { products: ProductResolverService },
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
];
