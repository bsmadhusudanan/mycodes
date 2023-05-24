import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceregisterComponent } from './attendanceregister.component';

describe('AttendanceregisterComponent', () => {
  let component: AttendanceregisterComponent;
  let fixture: ComponentFixture<AttendanceregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
