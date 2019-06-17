var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//subclass - classe especialista
var Batman = /** @class */ (function (_super) {
    __extends(Batman, _super);
    function Batman() {
        return _super.call(this) || this;
    }
    Batman.prototype.getPericia = function () {
        return "A(s) per\u00EDcia(s) do " + this.getCodenome() + " \u00E9/s\u00E3o: " + this.pericia;
    };
    Batman.prototype.setPericia = function (pericia) {
        this.pericia = pericia;
    };
    Batman.prototype.getSuperPoder = function () {
        if (this.superPoder == undefined) {
            return "Este her\u00F3i n\u00E3o tem Super Poderes";
        }
        else {
            return "O(s) Super Poder(es) do " + this.getCodenome() + " \u00E9/s\u00E3o: " + this.superPoder;
        }
    };
    Batman.prototype.setSuperPoder = function (superPoder) {
        this.superPoder = superPoder;
    };
    Batman.prototype.getPoder = function () {
        return "O n\u00EDvel de poder do " + this.getCodenome() + " \u00E9: " + this.poder;
    };
    Batman.prototype.setPoder = function (poder) {
        this.poder = poder;
    };
    Batman.prototype.getFraqueza = function () {
        return this.getArquirrival();
    };
    Batman.prototype.getArquirrival = function () {
        return "Coringa";
    };
    return Batman;
}(Hero));
var homemMorcego = new Batman;
homemMorcego.setCodenome('Batman');
homemMorcego.setIdentidadeSecreta('Bruce Wayne');
homemMorcego.setPericia('Combate Corpo a Corpo, Combate com Armas, Mestre em fugas e Explosivos');
homemMorcego.setPoder(4);
console.log("O codenome do her\u00F3i \u00E9: " + homemMorcego.getCodenome() + "\n    Sua identidade secreta \u00E9: " + homemMorcego.getIdentidadeSecreta() + "\n    Seu Arquirrival \u00E9: " + homemMorcego.getArquirrival() + "\n    " + homemMorcego.getPericia() + "\n    " + homemMorcego.getSuperPoder() + "\n    " + homemMorcego.getPoder() + "\n    Sua fraqueza \u00E9: " + homemMorcego.getFraqueza() + " ");
