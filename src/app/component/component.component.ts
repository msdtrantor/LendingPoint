import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent {
  name = "Manoj Singh Danu";
  constructor() {
    setTimeout(() => {
      this.name = "M S D";
    }, 5000);

  }
}
