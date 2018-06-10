import { Injectable } from '@angular/core';
import{Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  userDetails;
isuservalid:boolean=false;

  setuserDetails(data) {
    this.userDetails = data;
  }

  getUserData() {
    return this.userDetails;
  }

  mysujobs=new Subject();
  updateuservalid(){
    this.mysujobs.next();
  }


}


