//ex_01
let val1 = 190;
val1 += 45;
console.log(val1);

//ex_02
let frase1 = 'TypeScript';
frase1 = `Aula de ${frase1}`;
console.log(frase1);

//ex_03
let idadec = 18;
function printar(teste) { console.log(teste) };
printar(`Sua idade: ${idadec}`);
if (idadec < 16) { printar(`Você não pode votar!`); }
else if (idadec >= 16 && idadec < 18 && idadec >= 70) { printar(`Você pode votar, mas não é obrigado.`); }
else { printar(`Você é obrigado a votar.`) }

//ex_04
let nome = 'Luis';
let mes = 4;
let ano = 1987;
let mesatual = 6;
let anoatual = 2019;
let idade = 0;

let regexAno = new RegExp(/^\d{4}$/);
let regexMes = new RegExp(/^\d{1-2}$/);

if (regexMes.test(mes.toString()) && regexAno.test(ano.toString()) && ano <= anoatual) {
    ano = anoatual - ano;
    if (mes <= mesatual) {
        printar(`${nome}, ${ano} anos`);
    } else { ano += 1; printar(`${nome}, ${ano} anos`) }
};

//ex_05
let calc1 = 1;
let calc2 = 2;
let calc3;

if (calc3 == null) {
    calc3 = 0;
}

console.log(`A soma é = ${calc1 + calc2 + calc3}`);