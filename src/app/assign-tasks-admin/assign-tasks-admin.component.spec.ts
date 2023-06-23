
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTasksAdminComponent } from './assign-tasks-admin.component';

describe('TodoMenuComponent', () => {
  let component: AssignTasksAdminComponent;
  let fixture: ComponentFixture<AssignTasksAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignTasksAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignTasksAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});