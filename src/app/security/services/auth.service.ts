import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError, retry} from "rxjs/operators";
import {HttpClient,  HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Employee} from "src/app/security/model/employee";
import { Company } from 'src/app/security/model/company';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  private employee:Employee | null=null;
  baseUrl = 'https://sofroute.azurewebsites.net';
  urlEmployee = `${this.baseUrl}/api/v1/employee`;
  urlCompany  = `${this.baseUrl}/api/v1/company`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError(
      'something happened with request, please try again later'
    );
  }


  // Método para el inicio de sesión

  // Obtener un Employee por email
  loginEmployeeByEmail(email: string): Observable<Employee> {
    const url = `${this.urlEmployee}/email/${email}`;
    return this.http.get<Employee>(url, this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }

  getEmployee(): Employee | null {
    return this.employee;
  }

  getEmployeeById(id: number): Observable<Employee> {
    const url = `${this.urlEmployee}/${id}`;
    return this.http.get<Employee>(url, this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }

  getAllCompanies() : Observable<Company[]>{
    return this.http.get<Company[]>(this.urlCompany, this.httpOptions).pipe(retry(2), catchError(this.handleError));

  }

  postEmployee(employee: Employee, companyId : number): Observable<Employee> {
    const url = `${this.baseUrl}/api/v1/companies/${companyId}/employees`;
    return this.http.post<Employee>(url, employee, this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }


}
