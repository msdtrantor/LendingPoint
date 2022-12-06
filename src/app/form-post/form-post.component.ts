import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent {
  constructor(private customerService: StudentService) {
  }
  postFormData(iData: any) {
    this.customerService.saveData(iData);
    throw new Error('Method not implemented.');
  }


}
