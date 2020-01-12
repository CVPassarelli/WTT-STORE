import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterCategory'
})
export class FilterCategory implements PipeTransform{
    transform(livro: any, filter: any) {
        console.log(livro, filter);
        return livro.filter(book => book.categoria === filter);
        /*if (filter) {
            filter = filter.trim().toLowerCase().toString();
            return livro
                .filter(ban =>
                    ban.descricao.toLowerCase().includes(filter))
        }
        else {
            return livro;
        }*/
        
    }   

}