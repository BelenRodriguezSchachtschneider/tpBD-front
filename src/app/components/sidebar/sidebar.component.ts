import { Component, ErrorHandler, Input, OnInit, Output } from '@angular/core';
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
  opcionSeleccionada1: Sector | undefined 
  opcionSeleccionada2: Repositor | undefined

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

}