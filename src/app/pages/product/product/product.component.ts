import { Component, OnInit } from '@angular/core';
import { ServicesGeralService } from 'src/app/services-geral.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

 
  quantidade: number = 1;
  id: number;
  livroSel: object;
  pagamento: string;
  alerta: string; 

  constructor(private livro: ServicesGeralService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.livroSel = this.livro.getLivrosById(this.route.snapshot.params.idLivro);    
  } 

  setProduto(produto: object){
    //console.log(produto, this.quantidade,this.pagamento);
    if(this.quantidade > 0 && this.quantidade !== null){
      let item = {
        quantidade: this.quantidade,
        livro: produto
      }
      this.livro.setItensCarrinho(item);
      this.alerta = undefined;      
    } else {
      this.alerta = 'Por favor insira quantidade e selecione uma forma de pagamento';      
    }
  }

}
