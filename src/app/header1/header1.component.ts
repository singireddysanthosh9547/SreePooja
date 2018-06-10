import { Component, OnInit } from '@angular/core';
import{RouterModule, Router} from '@angular/router';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {
  isuservalid=false;
  
  constructor(private router:Router , private xyx:UserServiceService) { }
  logout(){
    this.isuservalid=false;
    this.router.navigate(['/','login'])
  
  }
  
  ngOnInit(){
    this.xyx.mysujobs.subscribe(res=>{
    this.isuservalid=true;
    });
  }
  }