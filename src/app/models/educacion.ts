export class Educacion {
    id?: number;
    nombreE: string;
    institucionE: string;
    descripcionE: string;

    constructor(nombreE: string, institucionE:string, descripcionE: string) {
        this.nombreE = nombreE;
        this.institucionE = institucionE;
        this.descripcionE = descripcionE;
    }
}