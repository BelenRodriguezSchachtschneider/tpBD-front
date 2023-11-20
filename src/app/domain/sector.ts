
export class Sector {
   
    constructor(
        public id_sector:number,
        public desc_sector:string,
        public terSectorDesc:string
     ){
    }

    static fromJson(sectorjson: SectorJson): Sector{
        console.log(sectorjson) 
        return new Sector(
            sectorjson.id_sector,
            sectorjson.desc_sector,
            sectorjson.terSectorDesc,
            )
    }
}

export class SectorJson {
    constructor(
        public id_sector: number,
        public desc_sector:string,
        public terSectorDesc:string
    ){}

}

// export interface Sector{
//     id_sector:number,   
//     desc_sector:string,
// }