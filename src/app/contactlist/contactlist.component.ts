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

filter:any;
curremail = localStorage.getItem('email');
contactlist:any;



constructor(private router: Router, private http: HttpClient) {}

ngOnInit(): void {
  this.http.get(`http://127.0.0.1:2929/contacts/${this.curremail}`).subscribe((result)=> {
    this.contactlist=result;    
  });
 }

logout(){
  if(window.confirm('Do you want to go logout?')) {
  sessionStorage.clear(); 
  this.router.navigateByUrl('/',{
    skipLocationChange: true,
  })

}}


delete(id:any,i:any) {

  if(window.confirm('Do you want to go ahead?')) {
    console.log(id)
  this.http.put(`http://127.0.0.1:2929/contacts/delete/${this.curremail}/${id}`,this.contactlist).subscribe((result)=> {

  this.contactlist.splice(i, 1);

  })

  window.location.reload() 


}


}

}
