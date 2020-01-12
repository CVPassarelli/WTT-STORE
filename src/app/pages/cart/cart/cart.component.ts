import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicesGeralService } from 'src/app/services-geral.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any;
  totalCarrinho: number;

  constructor(private service: ServicesGeralService) { }

  ngOnInit() {
    this.cart = localStorage.getItem('carrinho') !== 'null' ? JSON.parse(localStorage.getItem('carrinho')) : [];
    this.totalCarrinho = this.cart !== '' && this.cart !== null ? this.cart.reduce(function(a: any,b: any){ return a + (b.quantidade * b.livro.preco)  }, 0) : 0; 
    
  }

  remover(livro: any){
    this.cart = this.service.removeItemCart(livro);
    this.totalCarrinho = this.cart.reduce(function(a: any,b: any){ return a + (b.quantidade * b.livro.preco)  }, 0);
  }
}
