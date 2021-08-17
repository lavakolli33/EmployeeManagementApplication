import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeesComponent } from './list-employees.component';
import { CreateEmployeeComponent } from './create-employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';

@NgModule({
  declarations: [
    ListEmployeesComponent,CreateEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]  
})
export class EmployeeModule { }
