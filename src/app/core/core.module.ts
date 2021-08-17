import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@NgModule({
  providers:[EmployeeService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
 }
