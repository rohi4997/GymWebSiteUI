import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
  //   $(document).ready(function(){

  //     $("instagram").click(function(){
  //         $("#instagram").hide();
  //     });
  // });

  AOS.init({duration: 4000})

  }

  toContact()
  {
    document.getElementById("contact")?.scrollIntoView();
  }

  
}
