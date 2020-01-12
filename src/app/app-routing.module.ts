import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';
import { HomeComponent } from './pages/home/home/home.component';
import { CartComponent } from './pages/cart/cart/cart.component';
import { ProductComponent } from './pages/product/product/product.component';
import { CheckOutComponent } from './pages/check-out/check-out/check-out.component';
import { CategoriasComponent } from './pages/categorias/categorias/categorias.component';
import { FinalizadoComponent } from './pages/finalizado/finalizado/finalizado.component';
import { LoginGuard } from './login.guard';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [AuthGuard]
  }, 
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoginGuard]
  }, 
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [LoginGuard]
  }, 
  {
    path: 'produto/:idLivro',
    component: ProductComponent,
    canActivate: [LoginGuard]
  }, 
  {
    path: 'checkOut',
    component: CheckOutComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'category/:name',
    component: CategoriasComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'finalizado',
    component: FinalizadoComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
