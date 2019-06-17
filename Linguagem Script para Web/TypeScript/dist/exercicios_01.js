//ex_01
var val1 = 190;
val1 += 45;
console.log(val1);
//ex_02
var frase1 = 'TypeScript';
frase1 = "Aula de " + frase1;
console.log(frase1);
//ex_03
var idadec = 18;
function printar(teste) { console.log(teste); }
;
printar("Sua idade: " + idadec);
if (idadec < 16) {
    printar("Voc\u00EA n\u00E3o pode votar!");
}
else if (idadec >= 16 && idadec < 18 && idadec >= 70) {
    printar("Voc\u00EA pode votar, mas n\u00E3o \u00E9 obrigado.");
}
else {
    printar("Voc\u00EA \u00E9 obrigado a votar.");
}
//ex_04
var nome = 'Luis';
var mes = 4;
var ano = 1987;
var mesatual = 6;
var anoatual = 2019;
var idade = 0;
var regexAno = new RegExp(/^\d{4}$/);
var regexMes = new RegExp(/^\d{1-2}$/);
if (regexMes.test(mes.toString()) && regexAno.test(ano.toString()) && ano <= anoatual) {
    ano = anoatual - ano;
    if (mes <= mesatual) {
        printar(nome + ", " + ano + " anos");
    }
    else {
        ano += 1;
        printar(nome + ", " + ano + " anos");
    }
}
;
//ex_05
var calc1 = 1;
var calc2 = 2;
var calc3;
if (calc3 == null) {
    calc3 = 0;
}
console.log("A soma \u00E9 = " + (calc1 + calc2 + calc3));
