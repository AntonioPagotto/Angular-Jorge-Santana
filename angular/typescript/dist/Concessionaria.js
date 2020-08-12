"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaCarros) {
        this.endereco = endereco;
        this.listaCarros = listaCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarLista = function () {
        return this.listaCarros;
    };
    Concessionaria.prototype.fornecerHorariosFuncionamento = function () {
        return 'SEG A SEX das 8h às 18h | SAB das 8h às 12h';
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
