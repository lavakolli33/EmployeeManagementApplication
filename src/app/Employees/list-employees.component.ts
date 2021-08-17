import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/Employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  employees:Employee[];
  phtoPath:"assets/images/img1.jpg";
  constructor(private empService:EmployeeService) { }

  ngOnInit(): void {
    this.empService.getEmployees().subscribe((list)=>{
      this.employees=list;      
    });
  }
}
