import { SearchOptions } from './components/sidebar/sidebar.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'tpbd';

  sidebarToResults!: SearchOptions

  toResult(value:SearchOptions){
      this.sidebarToResults = value
  }

}
