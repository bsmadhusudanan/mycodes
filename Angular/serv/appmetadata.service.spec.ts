import { TestBed, inject } from '@angular/core/testing';

import { AppmetadataService } from './appmetadata.service';

describe('AppmetadataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppmetadataService]
    });
  });

  it('should be created', inject([AppmetadataService], (service: AppmetadataService) => {
    expect(service).toBeTruthy();
  }));
});
