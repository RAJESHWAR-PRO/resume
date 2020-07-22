import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  ngOnInit(): void { 
  }
  today= new Date();
  jstoday = '';
  constructor() {
    this.jstoday = formatDate(this.today, 'hh:mm a', 'en-US', '+0530');
  }

}
