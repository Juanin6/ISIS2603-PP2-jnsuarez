export class Nave {
    id:number;
    imagen:string;
    nombre:string;
    descripcion:string;

    constructor(
        id:number,
    imagen:string,
    nombre:string,
    descripcion:string
    ){
        this.id=id;
        this.imagen = imagen;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}
