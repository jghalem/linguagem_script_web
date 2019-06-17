"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var homemMorcego = new app_1.Batman;
homemMorcego.setCodenome('Batman');
homemMorcego.setIdentidadeSecreta('Bruce Wayne');
homemMorcego.setPericia('Combate Corpo a Corpo, Combate com Armas, Mestre em fugas e Explosivos');
homemMorcego.setPoder(4);
console.log("O codenome do her\u00F3i \u00E9: " + homemMorcego.getCodenome() + "\n    Sua identidade secreta \u00E9: " + homemMorcego.getIdentidadeSecreta() + "\n    Seu Arquirrival \u00E9: " + homemMorcego.getArquirrival() + "\n    " + homemMorcego.getPericia() + "\n    " + homemMorcego.getSuperPoder() + "\n    " + homemMorcego.getPoder() + "\n    Sua fraqueza \u00E9: " + homemMorcego.getFraqueza() + " ");
