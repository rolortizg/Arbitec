import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userToken: any;
  profUserId: any;
  profUser:any;
  user:any;
  userId:any;
  sameUser:boolean;



  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.userToken = JSON.parse(localStorage.getItem('userToken'))
   if(!this.userToken)this.router.navigate(['login'])
   
   
   this.activeRoute.params
       .subscribe(params=>{
      
      this.profUserId = params.id

    })

      this.authService.getOneUser(this.profUserId)
      .subscribe(user=>{
       console.log(user)
        this.profUser = user
        
        console.log(this.profUser)
      })

      this.authService.getLoggedUser()
      .subscribe(user=>{
        console.log(user)
        this.user = user;
        console.log(this.user)
        this.userId = user._id;
        if (this.userId === this.profUserId) {
          this.sameUser = true;
        }
        })
  }

}
