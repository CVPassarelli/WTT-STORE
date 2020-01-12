import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './global-components/header/header.module';
import { LoginModule } from './pages/login/login/login.module';
import { ProductModule } from './pages/product/product/product.module';
import { CheckOutModule } from './pages/check-out/check-out/check-out.module';
import { HomeModule } from './pages/home/home/home.module';
import { CartModule } from './pages/cart/cart/cart.module';
import { CategoriasModule } from './pages/categorias/categorias/categorias.module';
import { HttpClientModule } from '@angular/common/http';
import { FinalizadoModule } from './pages/finalizado/finalizado/finalizado.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    LoginModule,
    ProductModule,
    CheckOutModule,
    HomeModule,
    CartModule,
    CategoriasModule,
    HttpClientModule,
    FinalizadoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
