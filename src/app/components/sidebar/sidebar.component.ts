import { lastValueFrom } from 'rxjs';
import { Component, ErrorHandler, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Repositor } from 'src/app/domain/repositor';
import { Sector } from 'src/app/domain/sector';
import { ABackendService } from 'src/app/service/a-backend.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent extends ErrorHandler implements OnInit{

  radioChecked: string = ""
  sectores: Sector[] = []
  repositores: Repositor [] = []
  opcionSeleccionada1!: number
  opcionSeleccionada2!: number
  @Output() opcionSeleccionada: EventEmitter<{  opcion1: number,  opcion2: number }> = new EventEmitter();

  constructor(private abackendService: ABackendService){
    super()
  }

  handleRadioChange() { }

  async ngOnInit() {
    try{
      this.sectores = await this.abackendService.getAllSectores()
      this.repositores = await this.abackendService.getAllRepositores()
      console.log("ngOnInit = " + this.sectores)
    }
    catch (error){
      this.handleError(error)
    }
  }

  onOpcionSeleccionadaChange( ){
    this.opcionSeleccionada.emit({
      opcion1: this.opcionSeleccionada1,
      opcion2: this.opcionSeleccionada2
    });
    console.log("valor elegido " + this.opcionSeleccionada)
  }

  llenarTabla(){
    if ( this.radioChecked == 'sector') {
        this.abackendService.getAllProductosBySector (this.opcionSeleccionada1)
        console.log("estoy en sector y la opción seleccionada es: " + this.opcionSeleccionada1)
    }
    else {
      this.abackendService.getAllProductosByRepositor (this.opcionSeleccionada2)
      console.log("estoy en repositor y la opción seleccionada es: " + this.opcionSeleccionada2)
    }
  }
}