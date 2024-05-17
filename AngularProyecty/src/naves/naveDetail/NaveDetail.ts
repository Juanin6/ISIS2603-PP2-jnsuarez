import { Nave } from "../Nave";

export class NaveDetail extends Nave {
    
    empresa_fabricacion:string;
    raza_origen:string;
    costo:string;
    bando:string;
    constructor(
        id:number,
    imagen:string,
    nombre:string,
    descripcion:string,
    empresa_fabricacion:string,
    raza_origen:string,
    costo:string,
    bando:string
    ){
        super(id,imagen,nombre,descripcion)
        this.empresa_fabricacion = empresa_fabricacion;
        this.raza_origen = raza_origen;
        this.costo = costo;
        this.bando = bando;
    }

}
