import { Coracao } from './../shared/coracao.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styles: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {


  @Input() public tentativas: number


  public coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]

  constructor() { 
    console.log(this.coracoes)
  }

  ngOnInit(): void {
    console.log('tentativas:', this.tentativas)
  }

}
