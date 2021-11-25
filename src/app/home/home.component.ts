import { Component, OnInit } from '@angular/core';
import { Detail } from '../shared/detail';
import { DETAILS } from '../shared/details';
// import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
// import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
  ]
})
export class HomeComponent implements OnInit {

  details: Detail = DETAILS;


  constructor() { }

  ngOnInit() {
  }

}
