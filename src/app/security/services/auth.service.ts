import { Injectable } from '@angular/core';
import {TemplateService} from "../../shared/services/template.service";
import {catchError, Observable, retry, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Employee} from "../../supplier/model/employee";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends TemplateService<Employee>{

  private user:Employee | null=null;
  constructor(http:HttpClient) {
    super(http);
    this.basePath = 'http://localhost:3000/api/v1/employees';
  }
  // Método para el inicio de sesión
  loginEmployee(email: string, password: string): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.getAll().subscribe((employees: Employee[]) => {
        const matchingEmployee = employees.find((employee: Employee) => {
          return employee.email === email && employee.password === password;
        });

        if (matchingEmployee) {
          this.user = matchingEmployee;
          console.log('Inicio de sesión exitoso');
          console.log('Nombre del empleado: ' + matchingEmployee.name);
          observer.next(true); // Emite un valor `true` al observador
          observer.complete();
        } else {
          console.log('No se encontró un empleado con el email y la contraseña coincidentes');
          observer.next(false); // Emite un valor `false` al observador
          observer.complete();
        }
      });
    });
  }

  getEmployee():Employee | null{
    return this.user;
  }

}
