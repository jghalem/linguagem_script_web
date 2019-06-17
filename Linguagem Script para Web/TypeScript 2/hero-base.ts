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

//interface - modelo, padrão
//como fosse assinado um contrato, onde obriga-se a utilizar e implementar aquele(s) recurso(s)
interface Habilidades {
    superPoder?: string
    pericia?: string
    poder: number

    getFraqueza(): string;
}

export {Hero, Habilidades};