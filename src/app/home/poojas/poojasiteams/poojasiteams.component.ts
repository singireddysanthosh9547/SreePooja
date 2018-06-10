import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-poojasiteams',
  templateUrl: './poojasiteams.component.html',
  styleUrls: ['./poojasiteams.component.css']
})
export class PoojasiteamsComponent  {

  constructor(private http:HttpClient) { }
  poojadata:any =[];
  ngOnInit() {
    const url="http://localhost/angular/sree%20pooja/servicecall.php";
    let data={crud:'fetchpooja'}
    this.http.post(url,data)
    .subscribe(
      (res:any)=>{
        console.log(res);
        this.poojadata=res;
        
        console.log(this.poojadata);
      },
      err=>{
        console.log("error found");
      }
      
    )
  }

}


