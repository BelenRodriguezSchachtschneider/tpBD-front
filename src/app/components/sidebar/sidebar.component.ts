import { Component, ErrorHandler, Input, OnInit, Output } from '@angular/core';
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
  opcionSeleccionada: Sector | undefined  

  constructor(private abackendService: ABackendService){
    super()
  }

  handleRadioChange() { }

  ngOnInit() {
    try{
      this.abackendService.getAllSectores().subscribe((sectors: Sector[])=>{this.sectores=sectors})
      console.log(this.sectores)
    }
    catch (error){
      this.handleError(error)
    }
  }

}