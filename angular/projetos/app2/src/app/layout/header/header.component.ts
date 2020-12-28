import { Oferta } from './../../models/oferta.model';
import { OfertasService } from './../../services/ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [OfertasService]
})
export class HeaderComponent implements OnInit {

  ofertas: Observable<Oferta[]>

  constructor(
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
  }

  pesquisa(termoPesquisa: string){
    this.ofertas = this.ofertasService.pesquisaOfertas(termoPesquisa)
    this.ofertas.subscribe((ofertas) => console.log(ofertas)),
    (err) => console.log(err),
    ()=> console.log('Fluxo');
  }

}
