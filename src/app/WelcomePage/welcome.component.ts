import { Component, OnInit, HostListener, Inject } from '@angular/core';  
import { trigger, state, transition, style, animate } from '@angular/animations';  
import { DOCUMENT, formatDate } from '@angular/common';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  ngOnInit(): void { 
  }
  today= new Date();
  jstoday = '';
  constructor() {
    this.jstoday = formatDate(this.today, 'hh:mm a', 'en-US', '+0530');
  }

}
