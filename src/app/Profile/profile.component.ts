import { Component, OnInit, HostListener, Inject } from '@angular/core';  
import { trigger, state, transition, style, animate } from '@angular/animations';  
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
)]
})
export class ProfileComponent implements OnInit {
  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() { 
    setTimeout(showPage, 3000);
    function showPage() {
      document.getElementById("loader").style.display = "none";
      document.getElementById("navbar").style.display = "block";
      document.getElementById("welcomeSection").style.display = "block";
      document.getElementById("aboutSection").style.display = "block";
      document.getElementById("educationSection").style.display = "block";
      document.getElementById("experienceSection").style.display = "block";
      document.getElementById("contactSection").style.display = "block";
    }
   }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset >= 50) {
       let scrollElement = document.getElementById('navbar');
       scrollElement.classList.add('sticky');
     } else {
      let scrollElement = document.getElementById('navbar');
        scrollElement.classList.remove('sticky'); 
     }
  }
  myFunction():void{
    let element = document.getElementById('myTopnav');
    if(element.className === "topnav"){
      element.className += " responsive";
    } else {
      element.className = "topnav";
    }
  }
  scrollWelcome(): void{
    var scrollToElement = document.getElementById('welcomeSection');
    scrollToElement.scrollIntoView({behavior:"smooth",block:"center"});
  }
  scrollAbout(): void{
    var scrollToElement = document.getElementById('aboutSection');
    scrollToElement.scrollIntoView({behavior:"smooth"});
    this.myFunction();
  }
  scrollEducation(): void{
    var scrollToElement = document.getElementById('educationSection');
    scrollToElement.scrollIntoView({behavior:"smooth",block:"center"});
    this.myFunction();
  }
  scrollExperience(): void{
    var scrollToElement = document.getElementById('experienceSection');
    scrollToElement.scrollIntoView({behavior:"smooth", block:"center"});
    this.myFunction();
  }
  scrollProjects(): void{
    var scrollToElement = document.getElementById('projectsSection');
    scrollToElement.scrollIntoView({behavior:"smooth", block:"center"});
    this.myFunction();
  }
  scrollContact(): void{
    var scrollToElement = document.getElementById('contactSection');
    scrollToElement.scrollIntoView({behavior:"smooth"});
    this.myFunction();
  }
}
