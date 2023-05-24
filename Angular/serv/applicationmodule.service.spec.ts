import { TestBed, inject } from '@angular/core/testing';

import { ApplicationmoduleService } from './applicationmodule.service';

describe('ApplicationmoduleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicationmoduleService]
    });
  });

  it('should be created', inject([ApplicationmoduleService], (service: ApplicationmoduleService) => {
    expect(service).toBeTruthy();
  }));
});
