import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  

  ngOnInit(): void {}

  toHome()
  {
    document.getElementById("home")?.scrollIntoView();
  }

  toAbout()
  {
    document.getElementById("about")?.scrollIntoView();
  }

  toSkills()
  {
    document.getElementById("skills")?.scrollIntoView();
  }

  toProjects()
  {
    document.getElementById("projects")?.scrollIntoView();
  }

  toContact()
  {
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});
  }

}
