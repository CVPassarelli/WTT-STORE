import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckOutComponent } from './check-out.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CheckOutComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CheckOutModule { }
