import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards:any[]
  constructor() { 
    this.cards=[
      {title:"Card1",subtitle:"Card1 subtitle",description:"Card1 description",icon:"https://material.angular.io/assets/img/examples/shiba2.jpg"},
      {title:"Card2",subtitle:"Card2 subtitle",description:"Card2 description",icon:"https://material.angular.io/assets/img/examples/shiba2.jpg"},
      {title:"Card3",subtitle:"Card3 subtitle",description:"Card3 description",icon:"https://material.angular.io/assets/img/examples/shiba2.jpg"},
      {title:"Card4",subtitle:"Card4 subtitle",description:"Card4 description",icon:"https://material.angular.io/assets/img/examples/shiba2.jpg"}
    ]
  }
   
  ngOnInit() {
  }

  removeCard(index){
    alert(this.cards[index].title);
  }

}
