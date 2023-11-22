import { Component, ErrorHandler, EventEmitter,OnInit, Output} from '@angular/core';
import { Repositor } from 'src/app/domain/repositor';
import { Sector } from 'src/app/domain/sector';
import { ABackendService } from 'src/app/service/a-backend.service';

export interface SearchOptions {
  radioCheckedvalue: string
  opcionSeleccionada1value: number 
  opcionSeleccionada2value: number 
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent extends ErrorHandler implements OnInit{

  radioChecked: string = "" 
  sectores: Sector[] = []
  repositores: Repositor [] = []
  opcionSeleccionada1: number = 0
  opcionSeleccionada2: number = 0 

  @Output() searchEvent = new EventEmitter<SearchOptions>();

  constructor(private abackendService: ABackendService){
    super()
  }

  handleRadioChange(value : string) { 
    if (value == 'sector'){this.opcionSeleccionada2 = 0}
    else if (value == 'repositor'){this.opcionSeleccionada1 = 0}
  }

  async ngOnInit() {
    try{
      this.sectores = await this.abackendService.getAllSectores()
      this.repositores = await this.abackendService.getAllRepositores()
    }
    catch (error){
      this.handleError(error)
    }
  }

  emitSearch() {
    const value:SearchOptions = {radioCheckedvalue: this.radioChecked, opcionSeleccionada1value: this.opcionSeleccionada1, opcionSeleccionada2value: this.opcionSeleccionada2}
    this.searchEvent.emit(value)
  }

  clearResults(){
    this.radioChecked = ""
    this.opcionSeleccionada1 = 0
    this.opcionSeleccionada2 = 0
    this.emitSearch()
  }
  
}