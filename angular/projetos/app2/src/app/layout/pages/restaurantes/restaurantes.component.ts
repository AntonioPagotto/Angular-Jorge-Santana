import { Oferta } from '../../../models/oferta.model';
import { OfertasService } from '../../../services/ofertas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {

  ofertas: Oferta[];
  categoria = "restaurante";

  dataTeste: any = new Date(2020, 12, 29);

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
