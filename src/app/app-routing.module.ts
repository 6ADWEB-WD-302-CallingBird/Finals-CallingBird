import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { UpdatecontactComponent } from './updatecontact/updatecontact.component';

const routes: Routes = [
  {
  path: 'aboutus', component:AboutusComponent
  },
  {
    path: 'updatecontact', component:UpdatecontactComponent
  },
  {
    path:'addcontact',component:AddcontactComponent
  },
  {
    path:'contacts', component:ContactlistComponent
  },
  {
    path: '',pathMatch: 'full', redirectTo: 'home'
  },
  {
  path: 'register', component: RegisterComponent
  },
  {
  path: 'login', component: LoginComponent
  },{
    path: 'home', component: HomepageComponent
  },
  {
    path: '**', component: HomepageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
