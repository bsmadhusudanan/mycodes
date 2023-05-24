import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Http, RequestOptions, Headers } from '@angular/http';
import { URLConstant } from '../app.url.constant';
import { map } from 'rxjs/operators';

@Injectable()
export class BatchService extends GenericService {
  constructor(private _httpBatchService: Http, private _urlAppConstants: URLConstant) {
    super(_httpBatchService, _urlAppConstants);
  }

  getAllByProgramGroupID(programGroupID)  {
    try {
      const header = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({headers: header});
        return this._httpBatchService.get(this._urlAppConstants.APIBaseURL + this._urlAppConstants.BatchModule +
          this._urlAppConstants.GetAllByProgramGroupID + '?id=' + programGroupID, options)
          .pipe(map(response => response.json()));
    } catch (error) {
      console.log('Error in calling Get All By Program Group ID ' + this._urlAppConstants.GetAllActiveAsDDL + '. Error : ' + error);
    }
  }
}
