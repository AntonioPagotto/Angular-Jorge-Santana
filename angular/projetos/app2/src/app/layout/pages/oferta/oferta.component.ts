import { OfertasService } from '../../../services/ofertas.service';
import { Oferta } from '../../../models/oferta.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  oferta: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService
  ) {
    this.route = route;
  }

  ngOnInit(): void {
    this.ofertaService.getOfertaById(this.route.snapshot.params['id'])
      .then((oferta) => this.oferta = oferta)
  }

  ngOnDestroy(){
  }

}
