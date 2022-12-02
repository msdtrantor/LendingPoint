import { Component, Input } from '@angular/core';
import { Student } from '../Student';

@Component({
  selector: 'app-passing',
  templateUrl: './passing.component.html',
  styleUrls: ['./passing.component.css']
})
export class PassingComponent {
  
  @Input() studentList!: Student;
}
