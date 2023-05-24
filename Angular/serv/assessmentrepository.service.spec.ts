import { TestBed, inject } from '@angular/core/testing';

import { AssessmentrepositoryService } from './assessmentrepository.service';

describe('AssessmentrepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssessmentrepositoryService]
    });
  });

  it('should be created', inject([AssessmentrepositoryService], (service: AssessmentrepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
