import { Component, OnInit, Input } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-poojasiteam',
  templateUrl: './poojasiteam.component.html',
  styleUrls: ['./poojasiteam.component.css']
})
export class PoojasiteamComponent  implements OnInit {

  constructor(private router:Router) { }
@Input() item;
poojaitem;
ngOnInit(){
  this.poojaitem=this.item;
  console.log('pooja details',this.poojaitem);
}
viewdetails(poojaid){
  console.log(poojaid);
  this.router.navigate(['/poojadetails/'+poojaid])

}
}


