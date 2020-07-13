import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PostdetailComponent } from './postdetail/postdetail.component';


const routes: Routes = [
  {path:"", component: LoginComponent },
  //{path:"**", component: LoginComponent },
  {path:"login",component:LoginComponent},
  {path:"register", component: RegisterComponent},
  //{path:"register", component: RegisterComponent},

  {path:"admin", component:MainlayoutComponent,
  canActivate:[AuthGuard],
  children:[
    
    {path:"main/:displayName", component:MainComponent}, 
   {path:"dashboard", component:DashboardComponent},
   {path:"myprofile/:displayName/:displayEmail", component:MyprofileComponent},
   {path:"postdetail/:id", component:PostdetailComponent},
   {path:"postdetail/:id/:getName", component:PostdetailComponent},
    //{path:'', component: LoginComponent},         
    ]},
  {path:"**", component: LoginComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
