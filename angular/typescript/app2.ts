import Carro from './Carro';
import Pessoa from './Pessoa';
import Concessionaria from './Concessionaria';  


// CRIAR CARROS //

let carroA = new Carro('Mini Cooper', 2)
let carroB = new Carro('Veloster', 3)
let carroC = new Carro('Sandero RS', 4)

// MONTAR A LISTA DE CARROS //
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av. Europa', listaDeCarros)


// MONTAR A LISTA DE CARROS DA CONCESSIONÁRIA //
//console.log(concessionaria.mostrarLista())

// COMPRAR O CARRO //

let cliente = new Pessoa('Antonio', 'Mini Cooper')

concessionaria.mostrarLista().map((carro: Carro) => {
    //console.log(carro)

    if(carro['modelo'] == cliente.dizerCarroPrefer()){
        //comprar o carro
        cliente.comprarCarro(carro)
    } 
)}

console.log(cliente.dizerCarroQueTem())


