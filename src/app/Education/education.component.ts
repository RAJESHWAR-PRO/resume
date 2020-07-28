import { Component, OnInit } from '@angular/core';  

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  enggCollegeStatus: boolean = true;
  interCollegeStatus: boolean = false;
  schoolStatus: boolean = false;
  selectedOption:string = "Vardhaman College of Engineering";
  isSlected = "Vardhaman College of Engineering";
  elementbackground = null;
  elementbackground1 = null;
  elementbackground2 = null;
  ngOnInit(): void {
    this.elementbackground = document.getElementById('menu1');
    this.elementbackground1 = document.getElementById('menu2');
    this.elementbackground2 = document.getElementById('menu3');
  }
  selectMenu():void{
    if(this.selectedOption === "Vardhaman College of Engineering")
    {
       this.enggCollege();
    }
    else if(this.selectedOption === "Narayana Jr. College")
    {
      this.interCollege();
    }
    else{
      this.school();
    }
  }

  enggCollege(): void{
    this.enggCollegeStatus = true;
    this.interCollegeStatus = false;
    this.schoolStatus = false;
    this.elementbackground = document.getElementById('menu1');
    this.elementbackground.className += " btn-style-adv";
    this.elementbackground1.classList.remove("btn-style-adv");
    this.elementbackground2.classList.remove("btn-style-adv");
  }
  interCollege(): void{
    this.enggCollegeStatus = false;
    this.interCollegeStatus = true;
    this.schoolStatus = false;
    this.elementbackground1 = document.getElementById('menu2');
    this.elementbackground1.className += " btn-style-adv";
    this.elementbackground.classList.remove("btn-style-adv");
    this.elementbackground2.classList.remove("btn-style-adv");
  }
  school(): void{
    this.enggCollegeStatus = false;
    this.interCollegeStatus = false;
    this.schoolStatus = true;
    this.elementbackground2 = document.getElementById('menu3');
    this.elementbackground2.className += " btn-style-adv";
    this.elementbackground.classList.remove("btn-style-adv");
    this.elementbackground1.classList.remove("btn-style-adv");
  }

}
