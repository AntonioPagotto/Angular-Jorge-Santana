import { Oferta } from '../../../models/oferta.model';
import { OfertasService } from '../../../services/ofertas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {

  ofertas: Oferta[]
  categoria = "diversao";

  constructor(
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCategoria(this.categoria)
      .then((ofertas) => {
        this.ofertas = ofertas;
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
