import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private httpRequest: HttpClient) { }
   getRequst() {
    return this.httpRequest.get('localhost:8090/student/get-all-data');
  }
}