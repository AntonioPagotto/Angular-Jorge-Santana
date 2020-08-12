"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo = /** @class */ (function () {
    function Veiculo() {
        this.vel = 0;
    }
    Veiculo.prototype.acelerar = function () {
        this.vel = this.vel + 10;
    };
    Veiculo.prototype.parar = function () {
        this.vel = 0;
    };
    Veiculo.prototype.velocidade = function () {
        return 10;
    };
    return Veiculo;
}());
exports.default = Veiculo;
