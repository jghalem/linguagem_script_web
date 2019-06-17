import { Hero, Habilidades } from './hero-base';

//subclass - classe especialista
export class Batman extends Hero implements Habilidades {

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
            return `Este herói não tem Superpoderes`
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