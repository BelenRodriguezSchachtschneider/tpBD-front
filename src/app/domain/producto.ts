// export interface Producto {
//     id_producto: number;
//     nombre_producto: string;
//     nombre_gondola: string;
//     desc_presentacion: string;
// }

export class Producto {
   
    constructor(
        public id_producto:number,
        public nombre_producto:string,
        public nombre_gondola:string,
        public desc_presentacion:string,
     ){
    }

    static fromJson(productojson: ProductoJson): Producto{
        console.log(productojson) 
        return new Producto(
            productojson.id_producto,
            productojson.nombre_producto,
            productojson.nombre_gondola,
            productojson.desc_presentacion
            )
    }
}

export class ProductoJson {
    constructor(
        public id_producto:number,
        public nombre_producto:string,
        public nombre_gondola:string,
        public desc_presentacion:string,
    ){}

}
