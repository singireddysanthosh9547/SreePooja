import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poojadetails',
  templateUrl: './poojadetails.component.html',
  styleUrls: ['./poojadetails.component.css']
})
export class PoojadetailsComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }
  poojadata;
  
  ngOnInit() {
    // let item = { 
    //   imagepath: "../assets/images/1_image_1_126.jpg",
    //  poojaname: "Engagement", 
    //  description: `"According to the Hindu Culture,Engagement(Wagdaan)is a promise to the wed and it is 
    //  the period of time between a marriage proposal and a Marriage.In Telugu it is called Nischitatrham/
    //  Nichaya Thamboolam. Succeeding is a slightly modifies engagement ceremony in india.It can be further 
    //  adjust to take into considerations the wishes and offened of the parties involved.The engaged couple
    //   is introduced as bride and groom,they do not become so as late the pre-wedding ceremony a day before 
    //   the actual wedding. .Groom's family is embrace at bride's home(vice versa). .General introductions 
    //   among the both family members. .Poonyahvachanam and Sankalpa. .Appeal by the Groom's father for the
    //    bride's hand for his son.Bride father compliance. .Firstly Ganesh Pooja and Varun Pooja.After 
    //    performing the pooja couple will be dressed up in a new clothes and have rings in their hands at 
    //    the auspicious Muhurtham. .Bride Worships Shachi for the fortune of the future marriage. .At the 
    //    end Bride and Groom exchange the rings. .The blessings are given to the couple and congratulate them" `}
    //    this.poojadata=item;
this.router.params.subscribe((data)=>{
  console.log(data.poojaid);
}

)}
}
