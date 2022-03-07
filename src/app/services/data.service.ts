import { Injectable } from '@angular/core';
import { Constant } from '../consts/constants';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Employee, Project } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  get_employees = Constant.get_employees;
  get_projects = Constant.get_projects;
  selectedEmployee: BehaviorSubject<Employee> = new BehaviorSubject<Employee>({
    id: null,
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    title: '',
    projects: [],
  });
  selectedProject: BehaviorSubject<Project> = new BehaviorSubject<Project>({
    id: null,
    name: '',
    startDate: '',
    endDate: null,
    status: '',
  });

  constructor(private http: HttpClient) {}

  getSelectedEmployee(): Observable<Employee> {
    return this.selectedEmployee.asObservable();
  }

  setSelectedEmployee(employee: Employee): void {
    this.selectedEmployee.next(employee);
  }

  getSelectedProject(): Observable<Project> {
    return this.selectedProject.asObservable();
  }

  setSelectedProject(project: Project): void {
    this.selectedProject.next(project);
  }

  getEmployees(): Observable<Employee[]> {
    return this.http
      .get<any>(this.get_employees)
      .pipe(catchError(this.handleError));
  }

  getProjects(): Observable<Project[]> {
    return this.http
      .get<any>(this.get_projects)
      .pipe(catchError(this.handleError));
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.status}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
