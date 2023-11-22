import { Component, ErrorHandler, EventEmitter, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ABackendService } from 'src/app/service/a-backend.service';
import { SearchOptions } from '../sidebar/sidebar.component';
import { Producto } from 'src/app/domain/producto';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent extends ErrorHandler implements OnInit, OnChanges{

  productos: Producto[] = [];

  @Input() searchResults!: SearchOptions
 
  constructor(private abackendService: ABackendService) { 
    super()
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.llenarTabla()
  }

  async ngOnInit() {
    try{
      this.productos = await this.abackendService.getAllProductos() 
    }
    catch (error){
      this.handleError(error)
    }
  }

  async llenarTabla(){
    if ( this.searchResults.radioCheckedvalue == 'sector') {
       this.productos = await this.abackendService.getAllProductosBySector (Number(this.searchResults.opcionSeleccionada1value))
    }
    else if (this.searchResults.radioCheckedvalue == 'repositor'){
      this.productos = await this.abackendService.getAllProductosByRepositor (Number(this.searchResults.opcionSeleccionada2value))
    }
    else {this.productos = await this.abackendService.getAllProductos()
    }
  }
}
