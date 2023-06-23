import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsLogComponent } from './buttons-log.component';

describe('ButtonsLogComponent', () => {
  let component: ButtonsLogComponent;
  let fixture: ComponentFixture<ButtonsLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonsLogComponent]
    });
    fixture = TestBed.createComponent(ButtonsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
