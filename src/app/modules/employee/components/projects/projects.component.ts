import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  selectedEmployee: Employee;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getSelectedEmployee().subscribe((employee: Employee) => {
      this.selectedEmployee = employee;
    });
  }
}
