import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-updatecontact',
  templateUrl: './updatecontact.component.html',
  styleUrl: './updatecontact.component.css'
})
export class UpdatecontactComponent {

  name: string ='';
  contactnumber: string ='';
  email: string ='';
  getId:any;
  curremail = localStorage.getItem('email');
  contactlist:any;


  constructor(private router: Router, private http: HttpClient,private activatedRoute: ActivatedRoute,
    ) {
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');

      this.http.get(`http://127.0.0.1:2929/contacts/${this.curremail}`).subscribe((result)=> {


    console.log(this.getId);
    this.contactlist = result

    for (let contact of this.contactlist.contactList) {
      if (contact._id == this.getId) {
        this.name = contact.contactname;
        this.contactnumber =contact.contactnumber;
        this.email = contact.contactemail;
      }
    }
  });

  
    }


  updatecontact(){

   let data = {
    'name' : this.name,
    'contactnumber' : this.contactnumber,
    'email' : this.email
   }


   this.http.put(`http://127.0.0.1:2929/contacts/update/${this.getId}`,data).subscribe(res => {
    if(res) {
      alert('Contact Updated!'); 
      this.router.navigateByUrl('/contacts',{
        skipLocationChange: true,
      })
    }


   })
  }

  logout(){
    if(window.confirm('Do you want to go logout?')) {
    sessionStorage.clear(); 
    this.router.navigateByUrl('/',{
      skipLocationChange: true,
    }) }}

}
