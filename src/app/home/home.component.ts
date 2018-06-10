import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private  http:HttpClient) { }

  ngOnInit() {
    const url="http://localhost/angular/sree%20pooja/servicecall.php";
    let data={crud:'fetchpooja'}
    this.http.post(url,data)
    .subscribe(
      (res)=>{
        console.log(data);
      },
      err=>{
        console.log("error found");
      }
      
    )
  }

}
