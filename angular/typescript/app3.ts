import Carro from './Carro'
import Moto from './Moto'
import Concessionaria from './Concessionaria'

let carro = new Carro('Mini Cooper', 2);
let moto = new Moto();

moto.acelerar()
carro.acelerar()

let concessionaria = new Concessionaria('',[])

console.log(moto)
console.log(carro)
console.log(concessionaria.fornecerHorariosFuncionamento())