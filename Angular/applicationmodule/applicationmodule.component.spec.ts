import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationmoduleComponent } from './applicationmodule.component';

describe('ApplicationmoduleComponent', () => {
  let component: ApplicationmoduleComponent;
  let fixture: ComponentFixture<ApplicationmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
