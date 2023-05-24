import { Injectable } from "@angular/core";
import { GenericService } from "./generic.service";
import { Http, RequestOptions, Headers } from "@angular/http";
import { URLConstant } from "../app.url.constant";
import { map } from "rxjs/operators";

@Injectable()
export class AssessmentrepositoryService extends GenericService {
  constructor(
    private _httpServiceCall: Http,
    private _urlAppConstants: URLConstant
  ) {
    super(_httpServiceCall, _urlAppConstants);
  }

  getAllByCourseMaterialID(id) {
    try {
        const header = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({headers: header});
        return this._httpServiceCall.get(this._urlAppConstants.APIBaseURL + this._urlAppConstants.AssessmentQuestionModule
          + this._urlAppConstants.GeAlltByCourseMaterialID + '?id=' + id)
          .pipe(map(response => response.json()));
    } catch (error) {
      console.log('Error in calling Get All Course Material ID : ' + error);
    }
  }


  getAllBySurveyID(id) {
    try {
        const header = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({headers: header});
        return this._httpServiceCall.get(this._urlAppConstants.APIBaseURL + this._urlAppConstants.AssessmentQuestionModule
          + this._urlAppConstants.GeAllBySurveyID + '?id=' + id)
          .pipe(map(response => response.json()));
    } catch (error) {
      console.log('Error in calling Get All Course Material ID : ' + error);
    }
  }


  getAllByAssessmentQuestionID(id) {
    try {
        const header = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({headers: header});
        return this._httpServiceCall.get(this._urlAppConstants.APIBaseURL + this._urlAppConstants.QuestionnaireModule
          + this._urlAppConstants.GetAllByAssessmentQuestionID + '?id=' + id)
          .pipe(map(response => response.json()));
    } catch (error) {
      console.log('Error in calling Get All Course Material ID : ' + error);
    }
  }

  removeByID(aqid,id) {
    try {
        const header = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({headers: header});
        return this._httpServiceCall.get(this._urlAppConstants.APIBaseURL + this._urlAppConstants.QuestionnaireContentModule
          + this._urlAppConstants.RemoveByID + '?assessmentID='+aqid+'&id='+ id)
          .pipe(map(response => response.json()));
    } catch (error) {
      console.log('Error in calling Question Content ID : ' + error);
    }
  }

  removeByQOID(aqid,id) {
    try {
        const header = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({headers: header});
        return this._httpServiceCall.get(this._urlAppConstants.APIBaseURL + this._urlAppConstants.QuestionOptionModule
          + this._urlAppConstants.RemoveByID + '?assessmentID='+aqid+'&id='+ id)
          .pipe(map(response => response.json()));
    } catch (error) {
      console.log('Error in calling Question Content ID : ' + error);
    }
  }

  removeByQAID(aqid,id) {
    try {
        const header = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({headers: header});
        return this._httpServiceCall.get(this._urlAppConstants.APIBaseURL + this._urlAppConstants.QuestionAnswerModule
          + this._urlAppConstants.RemoveByID + '?assessmentID='+aqid+'&id='+ id)
          .pipe(map(response => response.json()));
    } catch (error) {
      console.log('Error in calling Question Content ID : ' + error);
    }
  }



}
