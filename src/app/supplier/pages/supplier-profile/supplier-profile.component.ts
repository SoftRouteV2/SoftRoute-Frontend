import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../security/services/auth.service";
import {Employee} from "../../model/employee";
import {CompanyService} from "../../service/company.service";
import {Company} from "../../model/company";

@Component({
  selector: 'app-supplier-profile',
  templateUrl: './supplier-profile.component.html',
  styleUrls: ['./supplier-profile.component.css'],
})
export class SupplierProfileComponent implements OnInit{
  user:Employee;
  companyData:Company ;

  visible: boolean = false;
  nombre: string = '';
  email: string = '';
  contrasena: string = '';
  constructor( private authService: AuthService,private companyService:CompanyService ) {
    this.user={} as Employee;
    this.companyData={} as Company;
  }
  ngOnInit(): void {
    this.getEmployee();
  }
  getCompanyById(id:number){
    this.companyService.getById(id).subscribe((response:any)=>{
      this.companyData=response;
    })
  }

  getEmployee() {
    const user = this.authService.getEmployee();
    if (user !== null) {
      this.user = user;
      this.getCompanyById(this.user.companyId);
    }
  }
  showDialog() {
    this.visible = true;
  }

  protected readonly innerWidth = innerWidth;


  protected readonly console = console;

  updateEmployee() {
    this.authService.update(this.user.id,this.user).subscribe();
    console.log(this.authService.getById(this.user.id))
  }
}
