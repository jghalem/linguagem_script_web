"use strict";
exports.__esModule = true;
//superclass - classe genérica
var Hero = /** @class */ (function () {
    function Hero() {
    }
    Hero.prototype.getCodenome = function () {
        //retorna um valor anteriormente definido (não é possivel fazer "return codenome;" apenas.)
        return this.codenome;
    };
    Hero.prototype.setCodenome = function (codenome) {
        this.codenome = codenome;
    };
    Hero.prototype.getIdentidadeSecreta = function () {
        return this.identidadeSecreta;
    };
    Hero.prototype.setIdentidadeSecreta = function (identidadeSecreta) {
        this.identidadeSecreta = identidadeSecreta;
    };
    return Hero;
}());
exports.Hero = Hero;
