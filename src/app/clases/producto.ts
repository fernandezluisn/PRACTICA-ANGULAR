export class Producto {
    id:number;
    descripcion:string;
    tipo: string;
    fechaDeVencimiento:string;
    precio: number;
    rutaDeFoto: string;

    public constructor (id:number, descripcion:string, tipo:string, fechaV:string, precio:number, rutaDeFoto:string){
        this.id=id;
        this.descripcion=descripcion;
        this.tipo=tipo;
        this.fechaDeVencimiento=fechaV;
        this.precio=precio;
        this.rutaDeFoto=rutaDeFoto;
    }
}
