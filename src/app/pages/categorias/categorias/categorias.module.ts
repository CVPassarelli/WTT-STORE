import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasComponent } from './categorias.component';
import { RouterModule } from '@angular/router';
import { FilterCategory } from './categorias.pipe';



@NgModule({
  declarations: [CategoriasComponent, FilterCategory],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CategoriasModule { }
