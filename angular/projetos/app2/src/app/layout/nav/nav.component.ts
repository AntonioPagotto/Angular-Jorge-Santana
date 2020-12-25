import { Oferta } from './../../models/oferta.model';
import { OfertasService } from './../../services/ofertas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [ OfertasService ]
})
export class NavComponent implements OnInit {

  ofertas: Array<Oferta>

  constructor(
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    this.ofertas = this.ofertasService.getOfertas()
    }

}
