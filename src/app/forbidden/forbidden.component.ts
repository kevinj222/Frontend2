import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.css']
})
export class ForbiddenComponent implements AfterViewInit
{
  @ViewChild('typingElement')
  typingElement!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void 
  {
    const typed = new Typed(this.typingElement.nativeElement, 
      {
      strings: ['Unauthorized Access','No Sneaky peek!', 'Unauthorized exploit'], // Add the strings you want to display
      typeSpeed: 50, // Adjust the typing speed (milliseconds)
      loop: true, // Enable looping
      backSpeed: 50, // Adjust the speed of deleting characters (milliseconds)
    });
  }
}
