import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements AfterViewInit 
{
  @ViewChild('typingElement')
  typingElement!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void 
  {
    const typed = new Typed(this.typingElement.nativeElement, 
      {
      strings: ['Task Management', 'Scheduling Tasks', 'Tasks Communication'], // Add the strings you want to display
      typeSpeed: 50, // Adjust the typing speed (milliseconds)
      loop: true, // Enable looping
      backSpeed: 50, // Adjust the speed of deleting characters (milliseconds)
    });
  }
}