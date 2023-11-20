
export class Repositor {
   
    constructor(
        public id_repositor:number,
        public nombre:string,
     ){
    }

    static fromJson(respositorjson: RepositorJson): Repositor{
        console.log(respositorjson) 
        return new Repositor(
            respositorjson.id_repositor,
            respositorjson.nombre
            )
    }
}

export class RepositorJson {
    constructor(
        public id_repositor:number,
        public nombre:string,
    ){}

}
