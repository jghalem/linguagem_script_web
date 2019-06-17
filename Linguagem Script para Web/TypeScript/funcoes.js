// funções simples
function exibeMsg(msg) {
    console.log(msg);
}
// call fn
exibeMsg('Hello World');
var nmFuncao = 'exibeMsg';
exibeMsg("Uma outra chamada da fun\u00E7\u00E3o " + nmFuncao);
// funções com parametros(argumentos) opcionais
var soma = 10;
// função com valor padrão(default)
function contador(valor) {
    if (valor === void 0) { valor = 1; }
    soma += valor;
    console.log(soma);
}
contador();
contador(5);
contador(10);
function contador2(valor) {
    console.log(valor);
    soma += valor | 1;
    console.log(soma);
}
contador2();
// arrow function com expressão ternária
var parOuImpar;
parOuImpar = function (valor) { return (valor % 2 == 0) ? "Par" : "Impar"; };
console.log(parOuImpar(2));
//ex_01
var val1 = 190;
console.log(val1);
val1 = val1 + 190;
console.log(val1);
//ex_02
var frase1 = 'TypeScript';
frase1 = 'Aula de ' + frase1;
console.log(frase1);
//ex_03
var idadec = 18;
function printar(teste) { console.log(teste); }
;
printar("Sua idade: " + idadec);
if (idadec < 16) {
    printar("Voc\u00EA n\u00E3o pode votar!");
}
else if (idadec >= 16 && idadec < 18) {
    printar("Voc\u00EA pode votar, mas n\u00E3o \u00E9 obrigado.");
}
else {
    printar("Voc\u00EA \u00E9 obrigado a votar.");
}
