import Veiculo from './Veiculo'

class Moto extends Veiculo {
    public acelerar(): void {  //void significa que esse metodo nao retorna nada
        this.vel = this.vel + 15
    }
}


export default Moto