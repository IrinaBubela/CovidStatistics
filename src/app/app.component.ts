import { Component } from '@angular/core';
import { ApidataService } from './apidata.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularAPICovid';

  constructor(private data: ApidataService) {
  }
}
