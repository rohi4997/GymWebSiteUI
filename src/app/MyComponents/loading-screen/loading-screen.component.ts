import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
    $(document).ready(function(){
      // setTimeout(function(){$("#load").css("display", "none");  }, 3000);
      setTimeout(function(){$("#load").hide()  }, 3000);
      
  });
  }
}