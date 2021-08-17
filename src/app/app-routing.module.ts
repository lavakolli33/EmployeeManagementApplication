import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent } from './Employees/list-employees.component';
import { PagenotfoundComponent } from './pagenotfound.component';

const routes: Routes = [
 {path:'home',component:ListEmployeesComponent},
 {path:'',redirectTo:'/home',pathMatch:'full'}, 
 {path:'employees',loadChildren: () => import('./Employees/employee.module')
 .then(mod => mod.EmployeeModule) },
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
