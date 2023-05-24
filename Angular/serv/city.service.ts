import { Injectable } from "@angular/core";
import { URLConstant } from "../app.url.constant";
import { Http } from "@angular/http";
import { GenericService } from "./generic.service";

@Injectable()
export class CityService extends GenericService {
  constructor(
    private _httpCityService: Http,
    private _urlAppConstants: URLConstant
  ) {
    super(_httpCityService, _urlAppConstants);
  }
}
