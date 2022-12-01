import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  student: Student[];
  constructor() {
    this.student = [{ id: 1, name: "Manoj", country: "India", state: "UK", email: "manojdanu8@gmail.com" },
    { id: 2, name: "Vivek", country: "India", state: "Delhi", email: "vivek@gmail.com" },
    { id: 3, name: "Raju", country: "India", state: "KL", email: "raju@gmail.com" }
    ];
  }


  name = "Manoj Singh Danu";

} 
