import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent
{
  selectedButton: number = 0;

  selectButton(buttonNumber: number): void 
  {
    this.selectedButton = buttonNumber;
  }
}