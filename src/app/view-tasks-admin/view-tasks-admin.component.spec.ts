import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTasksAdminComponent } from './view-tasks-admin.component';

describe('ViewTasksAdminComponent', () => {
  let component: ViewTasksAdminComponent;
  let fixture: ComponentFixture<ViewTasksAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTasksAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTasksAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
