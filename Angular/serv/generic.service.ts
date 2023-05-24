import { Injectable } from "@angular/core";
import { Http, HttpModule, Headers, RequestOptions } from "@angular/http";
import { URLConstant } from "../app.url.constant";
import { map } from "rxjs/operators";

@Injectable()
export class GenericService {
  constructor(private _httpCalls: Http, private _urlConstants: URLConstant) {}
  getAll(moduleName) {
    try {
      // Example :  http://localhost:20101/Controller/Action
      return this._httpCalls
        .get(
          this._urlConstants.APIBaseURL + moduleName + this._urlConstants.GetAll
        )
        .pipe(map((response) => response.json()));
    } catch (error) {
      console.log(
        "Error in calling " +
          moduleName +
          "-" +
          this._urlConstants.GetAll +
          ". Error : " +
          error
      );
    }
  }

  getAllWithPagination(moduleName, pageIndex, itemsPerPage) {
    try {
      return this._httpCalls
        .get(
          this._urlConstants.APIBaseURL +
            moduleName +
            this._urlConstants.GetAll +
            "?pageIndex=" +
            pageIndex +
            "&itemsPerPage=" +
            itemsPerPage
        )
        .pipe(map((response) => response.json()));
    } catch (error) {
      console.log(
        "Error in calling " +
          moduleName +
          "-" +
          this._urlConstants.GetAll +
          ". Error : " +
          error
      );
    }
  }
  InvokeWithPagination(moduleName,methodName, pageIndex, itemsPerPage) {
    try {
      return this._httpCalls
        .get(
          this._urlConstants.APIBaseURL +
            moduleName +
            methodName +
            "?pageIndex=" +
            pageIndex +
            "&itemsPerPage=" +
            itemsPerPage
        )
        .pipe(map((response) => response.json()));
    } catch (error) {
      console.log(
        "Error in calling " +
          moduleName +
          "-" +
          this._urlConstants.GetAll +
          ". Error : " +
          error
      );
    }
  }

  getAllActive(moduleName) {
    try {
      return this._httpCalls
        .get(
          this._urlConstants.APIBaseURL +
            moduleName +
            this._urlConstants.GetAllActive
        )
        .pipe(map((response) => response.json()));
    } catch (error) {
      console.log(
        "Error in calling " +
          moduleName +
          "-" +
          this._urlConstants.GetAllActive +
          ". Error : " +
          error
      );
    }
  }

  getByID(moduleName, id) {
    try {
      const header = new Headers({ "Content-Type": "application/json" });
      const options = new RequestOptions({ headers: header });
      return this._httpCalls
        .post(
          this._urlConstants.APIBaseURL +
            moduleName +
            this._urlConstants.GetByID,
          id,
          options
        )
        .pipe(map((response) => response.json()));
    } catch (error) {
      console.log(
        "Error in calling " +
          moduleName +
          "-" +
          this._urlConstants.GetByID +
          ". Error : " +
          error
      );
    }
  }

  insertOrUpdate(moduleName, entity) {
    try {
      // console.log(localStorage.getItem("accessToken"));
      let header = new Headers({ "Content-Type": "application/json" });
      header.append("accessToken", localStorage.getItem("accessToken"));
      const options = new RequestOptions({ headers: header });
      return this._httpCalls
        .post(
          this._urlConstants.APIBaseURL +
            moduleName +
            this._urlConstants.InsertOrUpdate,
          entity,
          options
        )
        .pipe(map((response) => response.json()));
    } catch (error) {
      console.log(
        "Error in calling " +
          moduleName +
          "-" +
          this._urlConstants.InsertOrUpdate +
          ". Error : " +
          error
      );
    }
  }
  removeByID(moduleName, id) {
    try {
      const header = new Headers({ "Content-Type": "application/json" });
      const options = new RequestOptions({ headers: header });
      return this._httpCalls
        .get(
          this._urlConstants.APIBaseURL +
            moduleName +
            this._urlConstants.RemoveByID +
            "?id=" +
            id,
          options
        )
        .pipe(map((response) => response.json()));
    } catch (error) {
      console.log(
        "Error in calling " +
          moduleName +
          "-" +
          this._urlConstants.RemoveByID +
          ". Error : " +
          error
      );
    }
  }

  getByModuleAndMethod(moduleName, methodName) {
    try {
      return this._httpCalls
        .get(this._urlConstants.APIBaseURL + moduleName + methodName)
        .pipe(map((response) => response.json()));
    } catch (error) {
      console.log(
        "Error in calling " +
          moduleName +
          "-" +
          methodName +
          ". Error : " +
          error
      );
    }
  }
  getByModuleMethodParameter(moduleName, methodName, parameters) {
    try {
      return this._httpCalls
        .get(
          this._urlConstants.APIBaseURL + moduleName + methodName + parameters
        )
        .pipe(map((response) => response.json()));
    } catch (error) {
      console.log(
        "Error in calling " +
          moduleName +
          "-" +
          methodName +
          ". Error : " +
          error
      );
    }
  }
  invokeByModuleMethodParameterWithToken(moduleName, methodName, parameters) {
    try {
      const header = new Headers({ "Content-Type": "application/json" });
      header.append("accessToken", localStorage.getItem("accessToken"));
      const options = new RequestOptions({ headers: header });
      return this._httpCalls
        .get(
          this._urlConstants.APIBaseURL + moduleName + methodName + parameters,
          options
        )
        .pipe(map((response) => response.json()));
    } catch (error) {
      console.log(
        "Error in calling " +
          moduleName +
          "-" +
          methodName +
          ". Error : " +
          error
      );
    }
  }
  invokeByModuleMethodWithToken(moduleName, methodName) {
    try {
      const header = new Headers({ "Content-Type": "application/json" });
      header.append("accessToken", localStorage.getItem("accessToken"));
      const options = new RequestOptions({ headers: header });
      return this._httpCalls
        .get(
          this._urlConstants.APIBaseURL + moduleName + methodName,
          options
        )
        .pipe(map((response) => response.json()));
    } catch (error) {
      console.log(
        "Error in calling " +
          moduleName +
          "-" +
          methodName +
          ". Error : " +
          error
      );
    }
  }
  getAllActiveAsDDL(moduleName) {
    try {
      return this._httpCalls
        .get(
          this._urlConstants.APIBaseURL +
            moduleName +
            this._urlConstants.GetAllActiveAsDDL
        )
        .pipe(map((response) => response.json()));
    } catch (error) {
      console.log(
        "Error in calling " +
          moduleName +
          "-" +
          this._urlConstants.GetAllActiveAsDDL +
          ". Error : " +
          error
      );
    }
  }

  getAllActiveByKVP(moduleName) {
    try {
      return this._httpCalls
        .get(
          this._urlConstants.APIBaseURL +
            moduleName +
            this._urlConstants.GetAllActiveByKVP
        )
        .pipe(map((response) => response.json()));
    } catch (error) {
      console.log(
        "Error in calling " +
          moduleName +
          "-" +
          this._urlConstants.GetAllActiveByKVP +
          ". Error : " +
          error
      );
    }
  }
}
