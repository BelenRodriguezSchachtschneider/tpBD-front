import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, lastValueFrom } from 'rxjs'
import { Sector, SectorJson } from '../domain/sector'


@Injectable({
  providedIn: 'root'
})
export class ABackendService {

  constructor(private httpclient: HttpClient) {}
 

  async getAllSectores(){
    const sectores$ = this.httpclient.get<SectorJson[]>('http://localhost:8080/arraysectors')
    const sectorJson = await lastValueFrom(sectores$)
    return sectorJson.map((sectorJson) => Sector.fromJson(sectorJson))
  }

  // async getAllRepositores(){
  //   const cards$ = this.httpclient.get<CardJson[]>('http://localhost:9000/card-search')
  //   const cardJson = await lastValueFrom(cards$)
  //   return cardJson.map((cardJson) => Card.fromJson(cardJson))
  // }

  // async getAllProductos(){
  //   const cards$ = this.httpclient.get<CardJson[]>('http://localhost:9000/card-search')
  //   const cardJson = await lastValueFrom(cards$)
  //   return cardJson.map((cardJson) => Card.fromJson(cardJson))
  // }

  // async getBySector(id:number){
  //   const cards$ = this.httpclient.get<CardJson[]>('http://localhost:9000/card-search')
  //   const cardJson = await lastValueFrom(cards$)
  //   return cardJson.map((cardJson) => Card.fromJson(cardJson))
  // }

  // async getAllRepositor(id:number){
  //   const cards$ = this.httpclient.get<CardJson[]>('http://localhost:9000/card-search')
  //   const cardJson = await lastValueFrom(cards$)
  //   return cardJson.map((cardJson) => Card.fromJson(cardJson))
  // }

}
