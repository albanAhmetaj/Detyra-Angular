import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectsForm: FormGroup;
  projects: Observable<any>;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.projects = this.dataService.getProjects();
    this.projectsForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      status: new FormControl(''),
    });
    this.projectsForm.valueChanges.subscribe(res =>{
      console.log(res);
    })
  }

}
