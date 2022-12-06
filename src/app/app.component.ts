import { Component } from '@angular/core';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="sfdsfdsf";
  studentList: any;
  onClick(){
    console.log("Button is clicked !");
  }
  constructor(private studentData: StudentService) {
    this.studentData.getRequst().subscribe(data => {
      console.log(data);
      this.studentList = data;
    })
  }
}