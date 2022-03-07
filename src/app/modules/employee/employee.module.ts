import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EmployeeDataGridComponent } from './components/employee-data-grid/employee-data-grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmployeeComponent,
    BasicInfoComponent,
    ProjectsComponent,
    EmployeeDataGridComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    GridModule,
    InputsModule,
    ReactiveFormsModule
  ],
})
export class EmployeeModule {}
