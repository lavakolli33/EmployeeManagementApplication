import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Models/Employee.model';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient:HttpClient) { }
  getEmployees():Observable<Employee[]>{
    return this._httpClient.get<Employee[]>("http://localhost:3000/employees");
  }
}
