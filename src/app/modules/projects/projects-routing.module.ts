import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicInfoProjectsComponent } from './components/basic-info-projects/basic-info-projects.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  {path: '' , component: ProjectsComponent,
  children:[
    {path: 'basic-info-projects', component: BasicInfoProjectsComponent},
    {path: '**', redirectTo: 'basic-info-projects', pathMatch: 'full'}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
