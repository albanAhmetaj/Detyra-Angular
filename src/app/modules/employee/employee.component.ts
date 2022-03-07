import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee, Project } from 'src/app/models/model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  isBasic: boolean = true;
  employeeForm: FormGroup;
  employees$: Observable<Employee[]>;
  projects$: Observable<Project[]>;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.employees$ = this.dataService.getEmployees();
    this.projects$ = this.dataService.getProjects();
    this.employeeForm = new FormGroup({
      id: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      title: new FormControl(''),
      dateOfBirth: new FormControl(''),
      projects: new FormControl(null)
    });
    this.employeeForm.valueChanges.subscribe(res =>{
      console.log(res);
    })
  }
}
