import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
hide = true;
status = '';
colorstatus = 'green';

firstname: string ='';
lastname: string ='';
email: string ='';
password: string ='';
password2: string='';

alphabet ='abcdefghijklmnopqrstuvwxyz';
alphabetupper = this.alphabet.toUpperCase();
symbols = "!@#$%^&*()-_=+,.<>?/:;"
digits = '123456789';

digitcount =0;
alphabetcount = 0;
bigalphabet = 0;
symbolcount = 0;


constructor(private router: Router,private http: HttpClient){}

validationemail:boolean = false;

async register() {

  this.http.get(`http://127.0.0.1:2929/user/find/${this.email}`).subscribe( res => {
    if (res) {
      this.validationemail = false;
      this.status = 'Email Exists!';
      this.colorstatus = 'red';
    }
    else{
      this.validationemail = true;

      for(let i = 0; i < this.password.length; i++) {

        for(let j=0; j < this.alphabet.length;j++) {
          if (this.password[i] == this.alphabet[j]){
            this.alphabetcount += 1;
          }
        }
    
        for(let k=0; k < this.alphabetupper.length;k++) {
          if (this.password[i] == this.alphabetupper[k]){
            this.bigalphabet += 1;
          }
        }
    
        for(let l=0; l < this.symbols.length; l++) {
          if (this.password[i] == this.symbols[l]){
            this.symbolcount += 1;
          }
        }
    
        for(let m=0; m < this.digits.length;m++) {
          if (this.password[i] == this.digits[m]){
            this.digitcount += 1;
          }
        }
        
      }
    
     
      if (this.firstname =='' || this.lastname =='' || this.email ==''|| this.password2 == '' || this.password == '') {
        this.colorstatus = 'red';
        this.status = 'You need to fill all of the input fields.';
    
      } else if (this.password != this.password2){
        this.status = 'Password does not match';
        this.colorstatus = 'red';
      }
    
      else if (this.password.length < 8) {
    
      this.status = 'You must have atleast 8 characters in your password';
      this.colorstatus = 'red';
      } 
      else if (this.digitcount < 1) {
        this.status = 'Password Need a digit';
      this.colorstatus = 'Red';
      }
      else if (this.symbolcount < 1) {
        this.status = 'Password Need a symbol';
      this.colorstatus = 'red';
      }
      else if (this.bigalphabet < 1) {
        this.status = 'Password Need an Uppercase';
      this.colorstatus = 'red';
      }
      else if (this.digitcount >= 1 && this.bigalphabet >= 1 && this.symbolcount >=1 && this.password.length >= 8 && this.password == this.password2 && this.validationemail) {
        
        let data = {
          'firstname' : this.firstname,
          'lastname' : this.lastname,
          'email' :this.email,
          'password' : this.password,
        };
      
      this.http.post("http://127.0.0.1:2929/user/create",data).subscribe((resultData:any)=> {
        if(resultData) {
          alert('Account Created!');
          this.colorstatus = 'green';
          this.router.navigateByUrl('/login',{
            skipLocationChange: true,
          })
    
        }
        
      });
      }
    else {
      this.status = 'ERROR! CONNECTING TO SERVER';
      this.colorstatus = 'red';
    }

    }
  });



}


onInit(){}


}

