import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  endereco: string = 'Rua XYZ';
  numero: number = 10;
  complemento: string = 'casa rosa';
  formaPagamento: string = 'debito';

  constructor() { }

  ngOnInit(): void {
  }

  atualizaEndereco(endereco: string){
    this.endereco = endereco;
  }
  atualizaNumero(numero: number){
    this.numero = numero;
  }
  atualizaComplemento(complemento: string){
    this.complemento = complemento;
  }
  atualizaFormaPagamento(formaPagamento: string){
    this.formaPagamento = formaPagamento;
  }
}
