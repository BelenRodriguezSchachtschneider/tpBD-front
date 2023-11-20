import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, lastValueFrom } from 'rxjs'
import { Sector } from '../domain/sector'


@Injectable({
  providedIn: 'root'
})
export class ABackendService {

  constructor(private httpclient: HttpClient) {}
 

  getAllSectores(): Observable<Sector[]>{
    return this.httpclient.get<Sector[]>('http://localhost:8080/arraysectors')
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
