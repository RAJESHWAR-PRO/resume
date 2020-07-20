import { Component, OnInit, HostListener, Inject } from '@angular/core';  
import { trigger, state, transition, style, animate } from '@angular/animations';  
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  ngOnInit(): void {
    
  }
  cognizantStatus: boolean = true;

  cognizant(): void{
    this.cognizantStatus = true;
  }

}
