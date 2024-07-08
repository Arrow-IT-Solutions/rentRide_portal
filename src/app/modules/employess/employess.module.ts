import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './pages/employees/employees.component';
import { RolesComponent } from './pages/roles/roles.component';
import { employeesRoutingModule } from './employees.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgPrimeModule } from 'src/app/shared/ngprime.module';
import { AddRoleComponent } from './pages/add-role/add-role.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';



@NgModule({
  declarations: [
    EmployeesComponent,
    RolesComponent,
    AddRoleComponent,
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    employeesRoutingModule,
    SharedModule,
    NgPrimeModule
  ]
})
export class EmployessModule { }
