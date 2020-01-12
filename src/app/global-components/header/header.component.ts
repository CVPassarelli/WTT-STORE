import { Component, OnInit } from '@angular/core';
import { ServicesGeralService } from 'src/app/services-geral.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalCart: any;
  quantidade$: Observable<number>;
  constructor(private service: ServicesGeralService, private router: Router) {
      this.quantidade$ = this.service.carrinho;
      this.quantidade$.subscribe(res => this.totalCart = res)
  }

  ngOnInit() {
    let total = localStorage.getItem('carrinho') !== null ? JSON.parse(localStorage.getItem('carrinho')) : 0;    
    this.totalCart = total !== null ? total.length : 0;    
    
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
}