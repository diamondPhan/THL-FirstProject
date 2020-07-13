import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';


const routes: Routes = [
  {path:"", component: LoginComponent },
  //{path:"**", component: LoginComponent },
  {path:"login",component:LoginComponent},
  {path:"register", component: RegisterComponent},
  //{path:"register", component: RegisterComponent},

  {path:"admin", component:MainlayoutComponent,
  canActivate:[AuthGuard],
  children:[
    
    {path:"main", component:MainComponent}, 
   
    //{path:'', component: LoginComponent},         
    ]},
  {path:"**", component: LoginComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
