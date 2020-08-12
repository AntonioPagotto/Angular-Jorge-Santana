import Veiculo from './Veiculo';

export default class Carro extends Veiculo{ //classe carro
    private nPortas: number

    constructor(modelo: string, nPortas: number) { //aqui recebo os parametros do instanciamento
        super()
        this.modelo = modelo
        this.nPortas = nPortas
    }
}

// export let qualquer_coisa: string = 'Teste'