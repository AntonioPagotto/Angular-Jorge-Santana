import { Oferta } from './../../models/oferta.model';
import { OfertasService } from './../../services/ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [OfertasService]
})
export class HeaderComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;

  private subjectPesquisa: Subject<string> = new Subject<string>();
  constructor(
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
      .pipe(
        debounceTime(1000), //executa a ação do switchMap apos 1 segundo
        distinctUntilChanged(), //caso haja duas requisições iguais uma após a outra ele não faz duas requisiçoes...
        switchMap((termo) => {
          //a função trim elimina os espaços da direita e da esquerda, neste caso se o input for espaços, ela os removera
          if (termo.trim() === '') {
            return of<Oferta[]>([])
          }
          return this.ofertasService.pesquisaOfertas(termo)
        }),
        catchError((err) => {
          console.log(err)
          return of<Oferta[]>([])
        })
      )
  }

  limpar(){
    this.subjectPesquisa.next('')
  }

  pesquisa(termoPesquisa: string) {
    //enviando o termo para dentro do subject
    this.subjectPesquisa.next(termoPesquisa);
  }

}
