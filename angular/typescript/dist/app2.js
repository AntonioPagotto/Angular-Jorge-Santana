"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
// CRIAR CARROS //
var carroA = new Carro_1.default('Mini Cooper', 2);
var carroB = new Carro_1.default('Veloster', 3);
var carroC = new Carro_1.default('Sandero RS', 4);
// MONTAR A LISTA DE CARROS //
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('Av. Europa', listaDeCarros);
// MONTAR A LISTA DE CARROS DA CONCESSIONÁRIA //
//console.log(concessionaria.mostrarLista())
// COMPRAR O CARRO //
var cliente = new Pessoa_1.default('Antonio', 'Mini Cooper');
concessionaria.mostrarLista().map(function (carro) {
    //console.log(carro)
    if (carro['modelo'] == cliente.dizerCarroPrefer()) {
        //comprar o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
