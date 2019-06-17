import { Batman } from './batman';

let homemMorcego = new Batman;

homemMorcego.setCodenome('Batman');
homemMorcego.setIdentidadeSecreta('Bruce Wayne');
homemMorcego.setPericia('Combate Corpo a Corpo, Combate com Armas, Mestre em fugas e Explosivos');
homemMorcego.setPoder(4);

console.log(`O codenome do herói é: ${homemMorcego.getCodenome()}
    Sua identidade secreta é: ${homemMorcego.getIdentidadeSecreta()}
    Seu Arquirrival é: ${homemMorcego.getArquirrival()}
    ${homemMorcego.getPericia()}
    ${homemMorcego.getSuperPoder()}
    ${homemMorcego.getPoder()}
    Sua fraqueza é: ${homemMorcego.getFraqueza()} `)