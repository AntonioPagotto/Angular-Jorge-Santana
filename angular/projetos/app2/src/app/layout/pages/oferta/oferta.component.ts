import { OfertasService } from '../../../services/ofertas.service';
import { Oferta } from '../../../models/oferta.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  oferta: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService
  ) {
    this.route = route;
  }

  ngOnInit(): void {
    // RECUPERANDO PARAMETROS COM SNAPSHOT
    //aqui estamos recuperando o que está contido no "ID" passado na rota.
    // const id = this.route.snapshot.params['id']


    // RECUPERANDO PARAMETROS COM SUBSCRIBE
    //aqui ele passa um array com os params recebidos, por isso chamei param.id....
    // const id = this.route.params.subscribe((param) => param.id)
    /* o subscribe se inscreve em um determinado array/objeto e fica assistindo para ver
    se o array/objeto tem seu valor modificado. se for modificado, ele reage a essa mudança de
    alguma forma. */

    this.ofertaService.getOfertaById(this.route.snapshot.params['id'])
      .then((oferta) => this.oferta = oferta)

    // this.route.params.subscribe(
    //   (param) => console.log(param.id)),
    //   (err) => console.log(err),
    //   () => console.log('Fim!')


    // //OBSERVADOR
    // let tempo = Observable.interval(500);
  
    // //OBSERVÁVEL
    // tempo.subscribe((intervalo) => console.log(intervalo))


    

    //mais afundo:

    //OBSERVABLE - observável
    let meuObservableTeste = Observable.create((observer: Observer<number>)=> {
        observer.next(1)
        observer.next(5)
        observer.next(3)
    })



    //OBSERVABLE - observador
    meuObservableTeste.subscribe(
      (res) => console.log(res + 10)
    )





  }

}
