import { Component, OnInit ,ViewEncapsulation,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardViewComponent implements OnInit {
  @Input() cards:any[];
  @Output() removeCard = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {}

  remove(index:number){
    this.removeCard.emit(index);
  }

}
