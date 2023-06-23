import { Component } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {
  fieldValue?: string;

  submitForm(): void {
    if (this.fieldValue) {
      // Do something with the form value
      console.log('Form submitted with value:', this.fieldValue);
      // Reset the field value
      this.fieldValue = '';
    }
  }
}
