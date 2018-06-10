import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formClick: boolean = false;
  constructor(private http:HttpClient,private router:Router) { }
  
successmsg:boolean=false;
name;
email;
password;
repassword;
// login:any=false;
formclick=false;

ngOnInit(){

}
  submitRegister(formdata: NgForm) {
    this.formclick = true;
            this.name= formdata.value.name;
            this.email= formdata.value.email;
             this.password = formdata.value.password;
             this.repassword = formdata.value.repassword;
             
            //  if(this.rePassword.length <= 0){
            //   return null;
            // }
            // if (this.rePassword !==this.password) {
            //   return {
            //       doesMatchPassword: true
            //   };
          
        
            const data = {
              crud: 'insert',
              name: this.name,
              email: this.email,
              password: this.password
            };
            this.http.post("http://localhost/angular/sree%20pooja/servicecall.php",data)
              .subscribe(
                (res: Response) => {
                  this.email = '';
                  this.password = '';
                  this.name = '';
        
                  this.successmsg=true;
                  // this.router.navigate(['/', 'login']);
        
                });
              
              }
            }

          