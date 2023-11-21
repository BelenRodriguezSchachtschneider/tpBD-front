import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import {  lastValueFrom } from 'rxjs'
import { Sector, SectorJson } from '../domain/sector'
import { Repositor, RepositorJson } from '../domain/repositor'
//import { Producto, ProductoJson } from '../domain/producto'


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

  async getAllRepositores(){
    const repositores$ = this.httpclient.get<RepositorJson[]>('http://localhost:8080/arrayrepositors')
    const repositorJson = await lastValueFrom(repositores$)
    return repositorJson.map((repositorJson) => Repositor.fromJson(repositorJson))
  }

  async getAllProductos(){
    const producto$ = this.httpclient.get<any[]>('http://localhost:8080/firstcharge')
    const productoJson = await lastValueFrom(producto$)
    return productoJson.map(  item => {
      const [id_producto, nombre_producto, nombre_gondola, desc_presentacion] = item.split(',').map((value: string) => value.trim());
      return { id_producto, nombre_producto, nombre_gondola, desc_presentacion };
    })
  }

  async getAllProductosBySector(idsector:number){
    const producto$ = this.httpclient.get<any[]>(`http://localhost:8080/sectorcharge/${idsector}`)
    const productoJson = await lastValueFrom(producto$)
    return productoJson.map(  item => {
      const [id_producto, nombre_producto, nombre_gondola, desc_presentacion] = item.split(',').map((value: string) => value.trim());
      return { id_producto, nombre_producto, nombre_gondola, desc_presentacion };
    })
  }

  async getAllProductosByRepositor(idrepositor:number){
    const producto$ = this.httpclient.get<any[]>('http://localhost:8080/repositorcharge/' + idrepositor)
    const productoJson = await lastValueFrom(producto$)
    return productoJson.map(  item => {
      const [id_producto, nombre_producto, nombre_gondola, desc_presentacion] = item.split(',').map((value: string) => value.trim());
      return { id_producto, nombre_producto, nombre_gondola, desc_presentacion };
    })
  }


  //(productoJson) => Producto.fromJson(productoJson)
  
  
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
