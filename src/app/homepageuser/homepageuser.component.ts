import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-homepageuser',
  templateUrl: './homepageuser.component.html',
  styleUrls: ['./homepageuser.component.css']
})
export class HomepageuserComponent implements AfterViewInit 
{
  @ViewChild('typingElement')
  typingElement!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void 
  {
    const typed = new Typed(this.typingElement.nativeElement, 
      {
      strings: ['Task Management', 'Another Option', 'More Examples'], // Add the strings you want to display
      typeSpeed: 50, // Adjust the typing speed (milliseconds)
      loop: true, // Enable looping
      backSpeed: 50, // Adjust the speed of deleting characters (milliseconds)
    });
  }
}