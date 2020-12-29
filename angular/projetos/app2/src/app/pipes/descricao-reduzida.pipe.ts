import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descricaoReduzida'
})
export class DescricaoReduzidaPipe implements PipeTransform {

  transform(texto: string, param: number): string {
    if(texto.length > param){
      return texto.substr(0, param) + '... '
    } else {
      return texto;
    }
  }

}
