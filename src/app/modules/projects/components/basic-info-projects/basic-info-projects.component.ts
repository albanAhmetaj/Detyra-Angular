import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-info-projects',
  templateUrl: './basic-info-projects.component.html',
  styleUrls: ['./basic-info-projects.component.css']
})
export class BasicInfoProjectsComponent implements OnInit {
@Input('projects') set _projects(res:any) {
    console.log(res);
  };
@Input() projectsForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.projectsForm.valueChanges.subscribe(res =>{
      console.log(res);
    })
  }

}
