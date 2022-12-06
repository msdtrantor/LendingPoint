import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private httpRequest: HttpClient) { }

  public getRequst() {
    return this.httpRequest.get("http://localhost:8090/getAllStudents");
  }
  public saveData(iData: any) {
    return this.httpRequest.post("http://localhost:9090/add", iData)
      .subscribe((response) => console.log(response));    
  }
}