import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Http, RequestOptions, Headers } from '@angular/http';
import { URLConstant } from '../app.url.constant';
import { map } from 'rxjs/operators';

@Injectable()
export class AttendanceRegisterService extends GenericService {

  constructor(private _httpAttendanceRegisterService: Http, private _urlAppConstants: URLConstant) {
    super(_httpAttendanceRegisterService, _urlAppConstants);
  }
  updateAttendanceRegister(entity) {
    try {
      const header = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({headers: header});
      return this._httpAttendanceRegisterService.post(this._urlAppConstants.APIBaseURL
        + this._urlAppConstants.AttendanceRegisterModule  + this._urlAppConstants.UpdateAttendanceList, entity, options)
        .pipe(map(response => response.json()));
    } catch (error) {
      console.log('Error in calling ' + this._urlAppConstants.SemesterScheduleModule
      +  '-' + this._urlAppConstants.UpdatePeriodNumber + '. Error : ' + error);
    }
  }
}
