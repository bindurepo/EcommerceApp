import { Component, OnInit, Input } from '@angular/core';
import { cardDetails } from '../shared/schema';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() carddetails:cardDetails
  constructor() { }

  ngOnInit() {
  }

}
