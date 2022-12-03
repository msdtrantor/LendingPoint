import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private httpRequest: HttpClient) { }
   getRequst() {
    return this.httpRequest.get("http://localhost:8090/getAllStudents");
  }
}