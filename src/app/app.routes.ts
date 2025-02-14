import { Routes } from '@angular/router';
import { ListProduitsComponent } from './views/product/list-produits/list-produits.component';

export const routes: Routes = [
  {path:'products',component:ListProduitsComponent},
  // {path:'',loadChildren:()=>import('./views/product/product.module').then(m=>m.ProductModule)},
];
