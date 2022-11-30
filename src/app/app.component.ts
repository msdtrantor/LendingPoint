import { Component } from '@angular/core';
import { ComponentComponent } from './component/component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends ComponentComponent {
  title = 'lending-point';
  constructor(){
    super();
  }
}