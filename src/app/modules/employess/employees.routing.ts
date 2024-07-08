import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './pages/employees/employees.component';
import { RolesComponent } from './pages/roles/roles.component';
import { AddRoleComponent } from './pages/add-role/add-role.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';



const routes: Routes = [

  {
    path: '',
    component: EmployeesComponent,
  },
  {
    path: 'roles',
    component: RolesComponent,
  },
  {
    path: 'add-role',
    component: AddRoleComponent,
  },
{
    path: 'add-employee',
    component: AddEmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class employeesRoutingModule {}
