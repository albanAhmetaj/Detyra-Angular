import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  {path: '' , component: EmployeeComponent,
      children:[
        {path: 'basic-info', component: BasicInfoComponent},
        {path: 'projects', component: ProjectsComponent},
        {path: '**', redirectTo: 'basic-info', pathMatch: 'full'}
      ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
