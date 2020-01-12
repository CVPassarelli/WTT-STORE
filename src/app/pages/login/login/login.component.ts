import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = 'teste@teste.com.br';
  senha: string;
  alerta: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    if(this.email === 'teste@teste.com.br' && this.senha === '1234'){
      localStorage.setItem('token', '12345');
      this.alerta = undefined;
      this.router.navigate(['/home']);
    } else {
      this.alerta = 'Usuário ou senha inválidos! Senha = 1234'
    }
  }
}
