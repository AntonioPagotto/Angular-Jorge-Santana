export default class Veiculo { //classe carro
    protected modelo: string
    private vel: number = 0

    public acelerar(): void {  //void significa que esse metodo nao retorna nada
        this.vel = this.vel + 10
    }
    public parar(): void {//void significa que esse metodo nao retorna nada
        this.vel = 0
    }
    public velocidade(): number {//neste caso como não há void, deve retornar algo (number)
        return 10
    }

}