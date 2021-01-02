import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  endereco: string = 'Endereço';
  numero: number = 0;
  complemento: string = 'Complemento';
  formaPagamento: string;

  //validando campos
  enderecoValido: boolean;
  numeroValido: boolean;
  complementoValido: boolean;
  formaPagamentoValido: boolean;

  //estados primitivos dos campos
  enderecoPrimitivo: boolean = true;
  numeroPrimitivo: boolean = true;
  complementoPrimitivo: boolean = true;
  formaPagamentoPrimitivo: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  atualizaEndereco(endereco: string){
    this.enderecoPrimitivo = false;
    this.endereco = endereco;
    if(this.endereco.length > 5){
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }
  }

  atualizaNumero(numero: number){
    this.numeroPrimitivo = false;
    this.numero = numero;
    if(this.numero > 0){
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }
  }

  atualizaComplemento(complemento: string){
    this.complementoPrimitivo = false;
    this.complemento = complemento;
    if(this.complemento.length > 0){
      this.complementoValido = true;
    }
  }

  atualizaFormaPagamento(formaPagamento: string){
    this.formaPagamentoPrimitivo = false;
    this.formaPagamento = formaPagamento;
    if(this.formaPagamento.length > 0){
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }
  }
}
