import { Component } from '@angular/core';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  studentList: any;
  onClick() {
    console.log("Button is clicked !");
  }
  constructor(private studentData: StudentService) {
    studentData.getRequst().subscribe(data => {
      console.log(data);
      this.studentList = data;
    })
  }
}