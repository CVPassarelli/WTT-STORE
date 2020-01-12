import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalizadoComponent } from './finalizado.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FinalizadoComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FinalizadoModule { }
