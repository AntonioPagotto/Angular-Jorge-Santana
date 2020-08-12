import { ConcessionariaInterface } from './ConcessionariaInterface';
import Carro from './Carro'

export default class Concessionaria implements ConcessionariaInterface{
    private endereco: string
    private listaCarros: Array<Carro> //any permite que a var possa receber qqr tipo de dado

    constructor(endereco: string, listaCarros: Array<Carro>) {
        this.endereco = endereco
        this.listaCarros = listaCarros
    }

    public fornecerEndereco(): string {
        return this.endereco
    }
    public mostrarLista(): Array<Carro> {
        return this.listaCarros
    }
    public fornecerHorariosFuncionamento(): string{
        return 'SEG A SEX das 8h às 18h | SAB das 8h às 12h'
    }
}