import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.sass']，
  animations: [
	  trigger('heroState', [
	    state('inactive', style({
	      backgroundColor: '#eee',
	      transform: 'scale(1)'
	    })),
	    state('active',   style({
	      backgroundColor: '#cfd8dc',
	      transform: 'scale(1.1)'
	    })),
	    transition('inactive => active', animate('100ms ease-in')),
	    transition('active => inactive', animate('100ms ease-out'))
	  ])
	]
})
export class ComposeMessageComponent implements OnInit {

  public state = 'inactive';
  
  constructor() {

  }

  ngOnInit() {
  }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

}
