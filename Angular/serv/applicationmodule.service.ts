import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { URLConstant } from '../app.url.constant';
import { Http } from '@angular/http';

@Injectable()
export class ApplicationmoduleService extends GenericService {

  constructor(private _httpService: Http, private _urlConstant: URLConstant) {
    super(_httpService, _urlConstant);
   }

}
