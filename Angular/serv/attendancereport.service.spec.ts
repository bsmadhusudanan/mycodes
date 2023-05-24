import { TestBed, inject } from '@angular/core/testing';

import { AttendancereportService } from './attendancereport.service';

describe('AttendancereportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttendancereportService]
    });
  });

  it('should be created', inject([AttendancereportService], (service: AttendancereportService) => {
    expect(service).toBeTruthy();
  }));
});
