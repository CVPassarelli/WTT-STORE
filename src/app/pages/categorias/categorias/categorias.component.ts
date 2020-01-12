import { Component, OnInit } from '@angular/core';
import { ServicesGeralService } from 'src/app/services-geral.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  livrosCategory: any;
  titulo: string;

  constructor(private service: ServicesGeralService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.livrosCategory = this.service.getLivros();
    this.titulo = this.route.snapshot.params.name;
    this.route.params.subscribe(param => this.titulo = param.name)
  }

}
