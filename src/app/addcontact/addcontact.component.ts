import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrl: './addcontact.component.css'
})
export class AddcontactComponent {

  curremail = localStorage.getItem('email');


  name: string ='';
  contactnumber: string ='';
  email: string ='';
  status = ''

  constructor(private router: Router, private http: HttpClient) {}

  addcontact() {

    let data = {
      'name' : this.name,
      'contactnumber' : this.contactnumber,
      'email' :this.email,
    };

    if (this.name == '' || this.contactnumber == '' || this.email == '' ) {
      this.status = 'FILL ALL THE FIELDS!'
    }
    else 
    {
    this.http.put(`http://127.0.0.1:2929/user/addcontact/${this.curremail}`,data).subscribe((resultData:any)=> {
      if(resultData) {
        alert('Contacts Created!');
        this.router.navigateByUrl('/contacts',{
          skipLocationChange: true,
        });

      }
    }); 
  
      }

  }

  logout(){
    if(window.confirm('Do you want to go logout?')) {
    sessionStorage.clear(); 
    this.router.navigateByUrl('/',{
      skipLocationChange: true,
    }) }}
  

}
