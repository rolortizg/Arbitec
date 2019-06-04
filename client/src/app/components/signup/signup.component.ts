import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hasAccount: boolean = true
  party: boolean = true
  name:string = ''
  lastName:string = ''
  email: string = ''
  password: string = ''
  username: string = ''
  role: string = ''
  auth: any = {
    name:'',
    lastName:'',
    username: '',
    email: '',
    password: '',
    role:''
  }
  user:any;

  constructor(
    private authService:AuthService,
    private router: Router
    ) { }


  handleSignup(){
    this.auth.name = this.name;
    this.auth.lastName = this.lastName;
    this.auth.username = this.username;
    this.auth.email = this.email;
    this.auth.password = this.password;
    this.auth.role = this.role
    this.authService.signup(this.auth)
    .subscribe( user => this.user = user)
    this.name = '';
    this.lastName = '';
    this.username = '';
    this.email = '';
    this.password = '';
    this.role = '';
    this.hasAccount = true;
    this.router.navigate(['login'])

  }

  // truify(){
  //   this.auth.party = this.party
  //   this.authService.signup(this.auth)
  //   .subscribe( user => this.user = user)
  //   this.party = false;
  // }
  

  ngOnInit() {
  }

}
