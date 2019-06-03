import {Routes} from '@angular/router'

//component
import { HomeComponent } from './components/home/home.component';
import { VotingComponent } from './components/voting/voting.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';



export const routes: Routes = [
    
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',  component: HomeComponent},
    { path: 'vote',  component: VotingComponent},
    { path: 'login',  component: LoginComponent},
    { path: 'signup',  component: SignupComponent},


 

    
  ]
