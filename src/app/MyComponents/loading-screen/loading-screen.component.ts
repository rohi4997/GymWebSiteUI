import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (function ($) {
    $(window).load(function() {
      $('#loading').hide();
    });
  })(jQuery);
  }

}
