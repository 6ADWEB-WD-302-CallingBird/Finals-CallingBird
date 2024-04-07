import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-updatecontact',
  templateUrl: './updatecontact.component.html',
  styleUrl: './updatecontact.component.css'
})
export class UpdatecontactComponent {

  name: string ='';
  contactnumber: string ='';
  email: string ='';

  constructor(private router: Router, private http: HttpClient) {}

  updatecontact(){}

  logout(){
    if(window.confirm('Do you want to go logout?')) {
    sessionStorage.clear(); 
    this.router.navigateByUrl('/',{
      skipLocationChange: true,
    }) }}

}
