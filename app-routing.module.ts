import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
const routes: Routes = [
  {path: 'employees',component:EmployeeListComponent},
  {path: 'create-employee', component:CreateEmployeeComponent},
  {path: 'update-employee/:id',component:UpdateemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
