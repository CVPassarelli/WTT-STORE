import { Component, OnInit } from '@angular/core';
import { ServicesGeralService } from 'src/app/services-geral.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private serviceAll: ServicesGeralService) { }
  livros: Array<object>;

  ngOnInit() {
    this.livros = this.serviceAll.getLivros();
    console.log(this.livros);
  }

}
