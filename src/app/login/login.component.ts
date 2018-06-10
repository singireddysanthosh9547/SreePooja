import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router,private service:UserServiceService,private http:HttpClient) { }

  ngOnInit() {
  }
  submitClick: boolean = false;
  successmsg: boolean = false;
  errormsg: boolean = false;

  email;
  password;
  submitLogin(formdata: NgForm) {
 this.successmsg=false;
    this.errormsg=false;


    if (formdata.valid) {
      this.email = formdata.value.email;
      this.password = formdata.value.password;
      if (this.email && this.password) {
        
      }
      else {
        // this.submitClick = true;
      }


    }
    else {
      this.submitClick = true;
    }
    const data = {
      crud: 'login',      
      email: this.email,
      password: this.password
    };
    this.http.post("http://localhost/angular/sree%20pooja/servicecall.php",data)
      .subscribe(
        (res:any) => {
          if(res){
            this.successmsg=true;
            this.service.updateuservalid();
            this.service.setuserDetails(res.recId);
            setTimeout(() => {
              this.router.navigate(['/', 'home']);
            }, 3000);
          }
          else{
            this.router.navigate(['/', 'login']);
          }
        },
        (err)=>{
          this.errormsg=true;
          this.router.navigate(['/', 'login']);
          // this.email="";
          // this.password="";
        }
);
}
}