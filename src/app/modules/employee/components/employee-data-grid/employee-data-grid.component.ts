import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-employee-data-grid',
  templateUrl: './employee-data-grid.component.html',
  styleUrls: ['./employee-data-grid.component.css'],
})
export class EmployeeDataGridComponent {
  employees: any = [];
  @Input('employees') set _employees(res: any) {
    this.employees = res;
  }
  @Input() employeeForm: FormGroup;
  selectedEmployee: any;
  staticEmployees = [
    {
      id: 1,
      firstName: 'Mujo',
      lastName: 'Mujic',
      title: 'radnik',
      dateOfBirth: '2017-12-07T13:42:01.068927Z',
      projects: [
        {
          id: 1,
          name: 'Project 1',
          startDate: '2017-10-31T22:00:00Z',
          endDate: '2017-11-29T22:00:00Z',
          status: 'ACTIVE',
        },
        {
          id: 2,
          name: 'Project 2',
          startDate: '2017-10-31T22:00:00Z',
          endDate: '2017-11-29T22:00:00Z',
          status: 'ACTIVE',
        },
      ],
    },
    {
      id: 2,
      firstName: 'Suljo',
      lastName: 'Suljic',
      title: 'radnik',
      dateOfBirth: '2017-12-07T13:42:01.068927Z',
      projects: [
        {
          id: 1,
          name: 'Project 1',
          startDate: '2017-10-31T22:00:00Z',
          endDate: '2017-11-29T22:00:00Z',
          status: 'ACTIVE',
        },
      ],
    },
  ];

  constructor(private dataService: DataService) {}

  selectEmployee(event: any): void {
    this.selectedEmployee = event.selectedRows[0].dataItem;
    this.dataService.setSelectedEmployee(this.selectedEmployee);
  }
}
