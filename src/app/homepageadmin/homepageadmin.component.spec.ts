import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageadminComponent } from './homepageadmin.component';

describe('HomepageadminComponent', () => {
  let component: HomepageadminComponent;
  let fixture: ComponentFixture<HomepageadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageadminComponent]
    });
    fixture = TestBed.createComponent(HomepageadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
