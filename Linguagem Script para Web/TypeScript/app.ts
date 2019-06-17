//superclass - classe genérica
abstract class Hero {
    private codenome: string;
    private identidadeSecreta: string;

    constructor() { }

    getCodenome(): string {
        //retorna um valor anteriormente definido (não é possivel fazer "return codenome;" apenas.)
        return this.codenome;
    }

    setCodenome(codenome: string): void {
        this.codenome = codenome;
    }

    getIdentidadeSecreta(): string {
        return this.identidadeSecreta;
    }

    setIdentidadeSecreta(identidadeSecreta: string): void {
        this.identidadeSecreta = identidadeSecreta;
    }
}

//subclass - classe especialista
class Batman extends Hero implements Habilidades {

    superPoder?: string;
    pericia?: string;
    poder: number;

    constructor() {
        super()
    }

    getPericia(): string {
        return `A(s) perícia(s) do ${this.getCodenome()} é/são: ${this.pericia}`
    }

    setPericia(pericia: string): void {
        this.pericia = pericia;
    }

    getSuperPoder(): string {
        if (this.superPoder == undefined) {
            return `Este herói não tem Super Poderes`
        } else {
            return `O(s) Super Poder(es) do ${this.getCodenome()} é/são: ${this.superPoder}`
        }
    }

    setSuperPoder(superPoder: string): void {
        this.superPoder = superPoder;
    }

    getPoder(): string {
        return `O nível de poder do ${this.getCodenome()} é: ${this.poder}`
    }

    setPoder(poder: number): void {
        this.poder = poder;
    }

    getFraqueza(): string {
        return this.getArquirrival();
    }

    getArquirrival(): string {
        return `Coringa`;
    }
}

//interface - modelo, padrão
//como fosse assinado um contrato, onde obriga-se a utilizar e implementar aquele(s) recurso(s)
interface Habilidades {
    superPoder?: string
    pericia?: string
    poder: number

    getFraqueza(): string;
}

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