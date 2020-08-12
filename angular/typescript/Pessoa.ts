import Carro from './Carro'

export default class Pessoa {
    private nome: string
    private carroPrefer: string
    private carro: Carro

    constructor(nome: string, carroPrefer: string) {
        this.nome = nome
        this.carroPrefer = carroPrefer
    }

    public dizerNome(): string {
        return this.nome
    }
    public dizerCarroPrefer(): string {
        return this.carroPrefer
    }
    public comprarCarro(carro: Carro): void {
        this.carro = carro
    }
    public dizerCarroQueTem(): Carro {
        return this.carro
    }
}