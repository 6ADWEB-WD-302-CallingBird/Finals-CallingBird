import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide = true;

  status = '';
  colorstatus = 'green';
  email: string ='';
password: string ='';

isLogin:boolean = true;

constructor(private router: Router, private http: HttpClient){}

login(){
let data = {
  email: this.email,
  password: this.password
};

this.http.post('http://127.0.0.1:2929/user/login',data).subscribe((resultData:any) => {

localStorage.setItem('email',data.email);

  if (resultData.status) {
    this.router.navigateByUrl('/contacts',{
      skipLocationChange: true,
    })
  }
  else {
    this.status = 'Incorrect Email / Password';
    this.colorstatus = 'red'; 
  }
})

}
}
