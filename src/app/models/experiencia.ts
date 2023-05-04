export class Experiencia {
    id?: number;
    nombreE: string;
    empresaE: string;
    descripcionE: string;

    constructor(nombreE: string, empresaE: string, descripcionE: string) {
        this.nombreE = nombreE;
        this.empresaE = empresaE;
        this.descripcionE = descripcionE;
    }
}