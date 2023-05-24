import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentrepositoryComponent } from './assessmentrepository.component';

describe('AssessmentrepositoryComponent', () => {
  let component: AssessmentrepositoryComponent;
  let fixture: ComponentFixture<AssessmentrepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentrepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentrepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
