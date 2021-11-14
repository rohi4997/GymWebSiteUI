import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'
import 'aos/dist/aos.css';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  

  ngOnInit(): void { AOS.init({duration: 2000});}

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
