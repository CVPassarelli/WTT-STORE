import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  
  checkout: Array<object>;
  totalCarrinho: number;
  nome: string;
  email: string;
  dataNascimento: string;
  alert: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.checkout = localStorage.getItem('carrinho') !== null ? JSON.parse(localStorage.getItem('carrinho')) : ''; 
    this.totalCarrinho = this.checkout.reduce(function(a: any,b: any){ return a + (b.quantidade * b.livro.preco)  }, 0);
  }

  submit(){
    console.log(this.nome, this.email, this.dataNascimento);
    if((this.nome === undefined || this.nome === '' || this.nome.length < 5) && (this.email === undefined || this.email === '') && (this.dataNascimento === undefined || this.dataNascimento === '')){
      this.alert = "Por favor preencha todos dados do formulário para finalizar seu pedido.";
    } else {
      this.alert = "";
      this.router.navigate(['/finalizado']);
    }
  }
}
