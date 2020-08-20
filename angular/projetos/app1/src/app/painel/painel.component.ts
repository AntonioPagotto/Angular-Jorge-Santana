import { FRASES } from './frases-mock';
import { Frase } from './../shared/frase.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public instrucao: string = 'Traduza a frase:'
  public frases: Frase[] = FRASES
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  public tentativas: number = 3

  constructor() { 
    this.atualizaRodada()  
  }

  ngOnInit(): void {
  }


  public attResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta(): void{

    if(this.resposta === ''){
      alert('O campo está vazio!')
    }else{    
    console.log(this.tentativas)
    if(this.rodadaFrase.frasePt == this.resposta){
      alert('A tradução está correta!')
      //trocar pergunta da rodada
      this.rodada++
      //progresso
      this.progresso = this.progresso + (100 / this.frases.length)
      console.log(this.progresso)
      //atualiza o objeto rodadaFrase
      this.atualizaRodada()
    } else {
      alert('A tradução está errada!')
      //decrementar a variavel tentativas
      this.tentativas--
      if(this.tentativas === -1){
        alert('Você perdeu o jogo!')
      }
    }
    console.log(this.tentativas)
  }
}
  public atualizaRodada(): void{
    //define a frase da rodada
    this.rodadaFrase = this.frases[this.rodada]
    //limpa a resposta
    this.resposta = ''
  }
}
