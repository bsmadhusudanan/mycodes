import { Injectable } from "@angular/core";
import { GenericService } from "./generic.service";
import { Http, Headers, RequestOptions } from "@angular/http";
import { URLConstant } from "../app.url.constant";
import { map } from "rxjs/operators";

@Injectable()
export class AppmetadataService extends GenericService {
  constructor(
    private _httpAppMetadataService: Http,
    private _urlAppConstants: URLConstant
  ) {
    super(_httpAppMetadataService, _urlAppConstants);
  }
  getAllActiveByDDL() {
    try {
      return this._httpAppMetadataService
        .get(
          this._urlAppConstants.APIBaseURL +
            this._urlAppConstants.AppMetadataModule +
            this._urlAppConstants.GetAllActiveAsDDL
        )
        .pipe(map(response => response.json()));
    } catch (error) {
      console.log(
        "Error in calling Title All Active As DDL -" +
          this._urlAppConstants.GetAllActiveAsDDL +
          ". Error : " +
          error
      );
    }
  }
  getAllByCategory(categoryName) {
    try {
      const header = new Headers({ "Content-Type": "application/json" });
      const options = new RequestOptions({ headers: header });
      return this._httpAppMetadataService
        .get(
          this._urlAppConstants.APIBaseURL +
            this._urlAppConstants.AppMetadataModule +
            this._urlAppConstants.GetAllByCategoryNameAsList +
            "?categoryName=" +
            categoryName,
          options
        )
        .pipe(map(response => response.json()));
    } catch (error) {
      console.log(
        "Error in calling Title All Active As DDL -" +
          this._urlAppConstants.GetAllActiveAsDDL +
          ". Error : " +
          error
      );
    }
  }
}
