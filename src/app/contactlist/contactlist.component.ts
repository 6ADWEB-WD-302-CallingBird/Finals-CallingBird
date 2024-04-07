import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrl: './contactlist.component.css'
})
export class ContactlistComponent {
//const clicks = localStorage.getItem('clickCounter');
constructor(private router: Router, private http: HttpClient) {}
logout(){
  if(window.confirm('Do you want to go logout?')) {
  sessionStorage.clear(); 
  this.router.navigateByUrl('/',{
    skipLocationChange: true,
  })

}}

}
