import { Oferta } from './../../models/oferta.model';
import { OfertasService } from './../../services/ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [OfertasService]
})
export class HeaderComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  private subjectPesquisa: Subject<string> = new Subject<string>();
  constructor(
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa.pipe(switchMap((termo) => {
      console.log('requisicao HTTP para a api', termo)
      return this.ofertasService.pesquisaOfertas(termo)
    }))
    this.ofertas.subscribe((res)=>console.log(res))
  }

  pesquisa(termoPesquisa: string) {
    console.log('keyupcaractere: ', termoPesquisa)
    //enviando o termo para dentro do subject
    this.subjectPesquisa.next(termoPesquisa);
  }

}
