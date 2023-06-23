import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageuserComponent } from './homepageuser.component';

describe('HomepageuserComponent', () => {
  let component: HomepageuserComponent;
  let fixture: ComponentFixture<HomepageuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageuserComponent]
    });
    fixture = TestBed.createComponent(HomepageuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
