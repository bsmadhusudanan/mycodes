import { TestBed, inject } from '@angular/core/testing';

import { AttendanceregisterService } from './attendanceregister.service';

describe('AttendanceregisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttendanceregisterService]
    });
  });

  it('should be created', inject([AttendanceregisterService], (service: AttendanceregisterService) => {
    expect(service).toBeTruthy();
  }));
});
