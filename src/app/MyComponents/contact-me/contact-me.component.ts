import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'
import 'aos/dist/aos.css';
// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// @NgModule({
// schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
// })
// add in angular.json "./node_modules/@lottiefiles/lottie-player/dist/lottie-player.js"
                       


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({duration: 2000})
  }


//   (function () {
//     'use strict';
//     window.addEventListener('load', function () {
//         // Fetch all the forms we want to apply custom Bootstrap validation styles to
//         var forms = document.getElementsByClassName('needs-validation');
//         // Loop over them and prevent submission
//         var validation = Array.prototype.filter.call(forms, function (form) {
//             form.addEventListener('submit', function (event) {
//                 if (form.checkValidity() === false) {
//                     event.preventDefault();
//                     event.stopPropagation();
//                 }
//                 form.classList.add('was-validated');
//             }, false);
//         });
//     }, false);
// })();

myFunction()
{
  setTimeout(function(){
    alert("Submitted!"); 
 }, 2000);//wait 2 seconds
}

}
