import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {


  constructor(private route: ActivatedRoute) { 
    this.route = route;
  }

  ngOnInit(): void {
    //aqui estamos recuperando o que está contido no "ID" passado na rota.
    this.route.snapshot.params['id']
    this.route.snapshot.params['subId']
  }

}
