import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration: 2000
    });
  }

  

}
