import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { BasicInfoProjectsComponent } from './components/basic-info-projects/basic-info-projects.component';
import { ProjectsDataGridComponent } from './components/projects-data-grid/projects-data-grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProjectsComponent,
    BasicInfoProjectsComponent,
    ProjectsDataGridComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    GridModule,
    InputsModule,
    ReactiveFormsModule
  ]
})
export class ProjectsModule { }
