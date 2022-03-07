import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Employee } from 'src/app/models/model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
@Input('employees') set _employees(res: Employee[]) {
  console.log(res);
};
@Input() employeeForm: FormGroup;
  constructor(private dateService: DataService) { }

  ngOnInit(): void {
    this.dateService.getSelectedEmployee().subscribe(res => {
      console.log(res);
      this.employeeForm.patchValue({
        id: res.id,
        firstName: res.firstName,
        lastName: res.lastName,
        title: res.title,
        dateOfBirth: res.dateOfBirth
      })
    })
  }

}
