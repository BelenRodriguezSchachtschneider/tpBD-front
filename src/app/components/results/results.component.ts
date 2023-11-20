import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Producto } from 'src/app/domain/producto';
import { ABackendService } from 'src/app/service/a-backend.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent extends ErrorHandler implements OnInit{

  productos: any[] = [];

  constructor(private abackendService: ABackendService) { 
    super()
  }

  async ngOnInit() {
    try{
      this.productos = await this.abackendService.getAllProductos()
      console.log("ngOnInit productos = " + this.productos)
    }
    catch (error){
      this.handleError(error)
    }
  }
}
