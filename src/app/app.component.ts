import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tpbd';

  opcionSeleccionada: { opcion1: number; opcion2: number; } = {opcion1: 0, opcion2:0}

  onOpcionSeleccionada(opciones: { opcion1: number, opcion2: number }) {
    this.opcionSeleccionada = opciones;
  }
}
