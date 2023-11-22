import { Component, ErrorHandler, EventEmitter, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ABackendService } from 'src/app/service/a-backend.service';
import { SearchOptions } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent extends ErrorHandler implements OnInit, OnChanges{

  productos: any[] = [];

  @Input() searchResults!: SearchOptions
 
  constructor(private abackendService: ABackendService) { 
    super()
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.llenarTabla()
    throw new Error('Method not implemented.');
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

  async llenarTabla(){
    if ( this.searchResults.radioCheckedvalue == 'sector') {
       this.productos = await this.abackendService.getAllProductosBySector (this.searchResults.opcionSeleccionada1value)
        console.log("estoy en sector y la opción seleccionada es: " + this.searchResults.opcionSeleccionada1value)
    }
    else {
      this.productos = await this.abackendService.getAllProductosByRepositor (this.searchResults.opcionSeleccionada2value)
      console.log("estoy en repositor y la opción seleccionada es: " + this.searchResults.opcionSeleccionada2value)
    }
  }
}
