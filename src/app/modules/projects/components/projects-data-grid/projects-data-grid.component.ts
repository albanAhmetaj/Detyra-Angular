import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-projects-data-grid',
  templateUrl: './projects-data-grid.component.html',
  styleUrls: ['./projects-data-grid.component.css'],
})
export class ProjectsDataGridComponent implements OnInit {
  projects: any;
  @Input('projects') set _projects(res: any) {
    this.projects = res;
  }
  @Input() projectsForm: FormGroup;
  selectedProject: any;
  staticProjects = [
    {
      id: 1,
      name: 'Project 1',
      startDate: '2017-10-31T22:00:00Z',
      endDate: '2024-11-29T22:00:00Z',
      status: 'ACTIVE',
    },
    {
      id: 2,
      name: 'Project 2',
      startDate: '2017-10-31T22:00:00Z',
      endDate: '2017-11-29T22:00:00Z',
      status: 'ACTIVE',
    },
  ];

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService.getSelectedProject().subscribe((res) => console.log(res));
  }

  selectProject(event: any): void {
    this.selectedProject = event.selectedRows[0].dataItem;
    this.projectsForm.patchValue({
      id: this.selectedProject.id,
      name: this.selectedProject.name,
      startDate: this.selectedProject.startDate,
      endDate: this.selectedProject.endDate,
      status: new Date(this.selectedProject.endDate) > new Date() ? "ACTIVE" : "NOT_ACTIVE"
    });

    this.dataService.setSelectedProject(this.selectedProject);
  }
}
