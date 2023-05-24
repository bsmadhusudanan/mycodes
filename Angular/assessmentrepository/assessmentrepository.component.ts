import { Component, OnInit } from "@angular/core";
import { AssessmentQuestionViewModel } from "./assessmentquestion.viewmodel";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Http } from "@angular/http";
import { URLConstant } from "../app.url.constant";
import { AssessmentrepositoryService } from "../services/assessmentrepository.service";
import { CourseMaterialService } from "../services/coursematerial.service";
import {
  QuestionContentViewModel,
  QuestionnaireViewModel,
  QuestionOptionViewModel,
  QuestionAnswerViewModel,
} from "./questionnaire.viewmode";
import { WizardInit, wizardOptions } from "../util/wizardOptions";

 
declare var jQuery: any;
declare var bootstrapWizard:any;
@Component({
  selector: "app-assessmentrepository",
  templateUrl: "./assessmentrepository.component.html",
  styleUrls: ["./assessmentrepository.component.css"],
})
export class AssessmentrepositoryComponent implements OnInit {
  _assessmentWizard:any;
  public _assessmentQuestionViewModel: AssessmentQuestionViewModel;
  public _questionContentViewModel: QuestionContentViewModel;
  public _questionContentForm: FormGroup;
  public _questionnaireViewModel: QuestionnaireViewModel;
  public _assessmentQuestionForm: FormGroup;
  public _questionOptionViewModel: QuestionOptionViewModel;
  public _questionOptionForm: FormGroup;
  _selectedCourseMaterialID: number;
  public _questionAnswerViewModel: QuestionAnswerViewModel;
  public _questionAnswerForm: FormGroup;

  action = "";
  public _assessmentQuestionDataList: any;
  public _questionnaireContent: any[] = [];
  public _questionContentDataList: any[] = [];
  public _questionOptionDataList: any[] = [];
  public _questionAnswerDataList: any[] = [];
  public _courseMaterialDataList: any;
  public _courseMaterialDataListFilter: any;
  confirmationMessage: string;
  public _selectedAssessment: any;
  public removeItem: any;
  public _disciplineDataList: any;
  documentData: FormData = new FormData();
  _MCODE: string;
  _courseMaterialID: string;
  downloadURL =
    this._urlConstant.APIBaseURL +
    this._urlConstant.CourseModule +
    this._urlConstant.DownloadFile;
    
  constructor(
    private _httpCalls: Http,
    private _urlConstant: URLConstant,
    private _assessmentRepositoryServiceCall: AssessmentrepositoryService,
    private _courseMaterialServiceCall: CourseMaterialService,
    private _fb: FormBuilder
  ) {
    this._assessmentWizard=new WizardInit("assessmentWizard",1,1,4).getInstance();
  }

  ngOnInit() {
    this._MCODE = this._urlConstant.CourseMaterial;

    this.applyViewRule();
    this.wizardInitSetup(this._assessmentWizard);
    this.resetCourseViewModel();
    this.resetQuestionOptionViewModel();
    this.resetQuestionAnswerViewModel();
    // this.getAll();
    this.getAllCourseMaterial();
    jQuery("#navigator").hide();
    this._courseMaterialID = "0";
    jQuery(document).ready(function () {
        jQuery("#QCValue").kendoEditor({
          encoded: true,
          tools: [
            "bold",
            "italic",
            "underline",
            "strikethrough",
            "justifyLeft",
            "justifyCenter",
            "justifyRight",
            "justifyFull",
            "insertUnorderedList",
            "insertOrderedList",
            "indent",
            "outdent",
            "createLink",
            "unlink",
            "insertImage",
            "insertFile",
            "subscript",
            "superscript",
            "tableWizard",
            "createTable",
            "addRowAbove",
            "addRowBelow",
            "addColumnLeft",
            "addColumnRight",
            "deleteRow",
            "deleteColumn",
            "mergeCellsHorizontally",
            "mergeCellsVertically",
            "splitCellHorizontally",
            "splitCellVertically",
            "viewHtml",
            "formatting",
            "cleanFormatting",
            "copyFormat",
            "applyFormat",
            "fontName",
            "fontSize",
            "foreColor",
            "backColor",
            "print",
          ],
        });
    });
    this.resetQuestionContentViewModel();
    this.resetQuestionnaireViewModel();
  }
  addNew() {
    this.resetCourseViewModel();
    this.resetQuestionContentViewModel();
    this.resetQuestionAnswerViewModel();
    this.resetQuestionOptionViewModel();
    this.resetQuestionnaireViewModel();
  }

  applyViewRule() {
    try {
      if (localStorage.getItem("permission") != null) {
        let permission = JSON.parse(
          localStorage.getItem("permission").toString()
        );
        permission.forEach((element) => {
          jQuery("#" + element.ModuleCode).show();
          if (element.ModuleCode === this._MCODE) {
            if (element.Create === true) {
              jQuery("." + this._urlConstant.AddNewBTN).show();
            } else {
              jQuery("." + this._urlConstant.AddNewBTN).hide();
            }
            if (element.Update === true) {
              jQuery("." + this._urlConstant.SaveBTN).show();
            } else {
              jQuery("." + this._urlConstant.SaveBTN).hide();
            }
            if (element.Delete === true) {
              jQuery("." + this._urlConstant.RemoveBTN).show();
            } else {
              jQuery("." + this._urlConstant.RemoveBTN).hide();
            }
          }
        });
      }
    } catch (error) {
      console.log("Error in applying the rules " + error);
    }
  }

  save(
    isValid: boolean,
    formData: AssessmentQuestionViewModel,
    addNew: boolean
  ) {
    if (isValid) {
      this._assessmentRepositoryServiceCall
        .insertOrUpdate(this._urlConstant.AssessmentQuestionModule, formData)
        .subscribe(
          (data) => {
            // console.log(JSON.stringify(data));
            if (data.StatusCode === 0) {
              jQuery("#errorMessage").text(data.ErrorMessage);
            } else {
              this.getAllAssessmentQuestion(this._selectedCourseMaterialID);
              this.showToast(
                formData.Title + " Saved Successfully.",
                "gritter-light"
              );
              this.cancelCM();
            }
          },
          (error) => alert(error),
          () => console.log("Add Course API Called")
        );
    } else {
      jQuery("#errorMessage").text("Please fill all fields before saving.");
    }
  }

  saveQuestionContent(isValid: boolean, formData: QuestionContentViewModel) {
    try {
      if (isValid) {
        if (formData.QCKey == "TextContent") {
          var editor = jQuery("#QCValue").data("kendoEditor");
          formData.QCValue = editor.value();
        }
        formData._id = this._selectedAssessment.AssessmentQuestionID;
        // if(this._questionnaireViewModel[0].QuestionContent==null){
        //   formData.OrderID=1;
        //  this._questionnaireContent=[];
        //  this._questionnaireContent.push(formData)
        //  this._questionnaireViewModel[0].QuestionContent=this._questionnaireContent;
        // }else{
        //   formData.OrderID=-1;
        //   this._questionnaireContent=[];
        //   this._questionnaireContent=this._questionnaireViewModel[0].QuestionContent;
        //   this._questionnaireContent.push(formData)
        //   this._questionnaireViewModel[0].QuestionContent=this._questionnaireContent;
        // }
        // this._questionnaireViewModel[0]._id=this._questionnaireViewModel[0].ID;
        // console.log("Request Data : "+JSON.stringify(formData))
        this._assessmentRepositoryServiceCall
          .insertOrUpdate(
            this._urlConstant.QuestionnaireContentModule,
            formData
          )
          .subscribe(
            (data) => {
              // console.log(JSON.stringify(data));
              if (data.StatusCode === 0) {
                if (formData.QCKey == "Audio") {
                  jQuery("#errorADMessage").text(data.ErrorMessage);
                } else if (formData.QCKey == "Video") {
                  jQuery("#errorVDMessage").text(data.ErrorMessage);
                } else if (formData.QCKey == "Image") {
                  jQuery("#errorIMMessage").text(data.ErrorMessage);
                }
              } else {
                this.getAssessment(this._selectedAssessment, false);
                this.showToast(" Saved Successfully.", "gritter-light");
                jQuery("#addOrEditQTNAD").modal("hide");
                jQuery("#addOrEditQTNTC").modal("hide");
                jQuery("#addOrEditQTNVD").modal("hide");
                jQuery("#addOrEditQTNIMG").modal("hide");
              }
            },
            (error) => alert(error),
            () => console.log("Add Course API Called")
          );
      } else {
        jQuery("#errorMessage").text("Please fill all fields before saving.");
      }
    } catch (error) {
      console.log("Error in saving the Audio : " + error);
    }
  }

  editQuestionContent(_qcontent) {
    try {
      console.log("Content : " + JSON.stringify(_qcontent));
      this._questionContentViewModel = _qcontent;
      switch (_qcontent.QCKey) {
        case "TextContent":
          jQuery("#addOrEditQTNTC").modal("show");
          break;
        case "Video":
          jQuery("#addOrEditQTNVD").modal("show");
          break;
        case "Image":
          jQuery("#addOrEditQTNIMG").modal("show");
          break;
        case "Audio":
          jQuery("#addOrEditQTNAD").modal("show");
          break;
      }
    } catch (error) {
      console.log("Error in Editing Question : " + error);
    }
  }

  checkTextEmpty(val) {
    if (val !== "TextContent") {
      return "hide";
    }
  }

  checkAudioEmpty(val) {
    if (val !== "Audio") {
      return "hide";
    }
  }

  checkVideoEmpty(val) {
    if (val !== "Video") {
      return "hide";
    }
  }

  checkImageEmpty(val) {
    if (val !== "Image") {
      return "hide";
    }
  }

  getAllAssessmentQuestion(_cmid) {
      try {
      this._selectedCourseMaterialID = _cmid;
      jQuery("#modal-loading").modal("show");
      this._assessmentRepositoryServiceCall
        .getAllByCourseMaterialID(_cmid)
        .subscribe(
          (data) => {
            jQuery("#modal-loading").modal("hide");
            if (data.StatusCode === 1) {
              this._assessmentQuestionDataList = [];
              this._assessmentQuestionDataList = data.ResponseObject;
              if(this._assessmentQuestionDataList.length>0){
                jQuery("#navigator").show();
              }else{
                jQuery("#navigator").hide();
              }
              // console.log("Assessment Question : "+JSON.stringify(this._assessmentQuestionDataList));
            }
          },
          (error) => alert(error),
          () => console.log("Get All By Course Material API Called")
        );
    } catch (error) {
      console.log("Error in retriving Course Material : " + error);
    }
  }
  getAssessment(_a, navigate) {
    try {
      this._selectedAssessment = _a;
      console.log("SA : "+JSON.stringify(this._selectedAssessment));
      console.log("AQ : "+this._selectedAssessment.AQType);

      if(this._selectedAssessment.AQType=="MTX"){
        jQuery("#btnAddComment").show();
      }else{
        jQuery("#btnAddComment").hide();
      }
      jQuery("#modal-loading").modal("show");
      this._assessmentRepositoryServiceCall
        .getAllByAssessmentQuestionID(_a.AssessmentQuestionID)
        .subscribe(
          (data) => {
            jQuery("#modal-loading").modal("hide");
            if (data.StatusCode === 1) {
              this._questionnaireViewModel = data.ResponseObject;
              this._questionContentDataList = [];
              this._questionContentDataList = this._questionnaireViewModel[0].QuestionContent;
              this._questionOptionDataList = [];
              this._questionOptionDataList = this._questionnaireViewModel[0].Option;
              this._questionAnswerDataList = [];
              this._questionAnswerDataList = this._questionnaireViewModel[0].Answer;
            }
          },
          (error) => alert(error),
          () => console.log("Get All By Question Answer API Called")
        );
      if (navigate) {
        jQuery(".btn-next").click();
      }
    } catch (error) {
      console.log("Error in Managing the Assessment : " + error);
    }
  }

  getControlObject(_a) {
    switch (_a.Control) {
      case "TA":
        return (
          "<input type='text' id='" + _a.QCKey + "' name='" + _a.QCKey + "'/>"
        );
        break;
      case "CAO":
        return (
          "<div class='radio'><label><input name='form-field-radio' type='radio' class='ace'  id='" +
          _a.QCKey +
          "' name='answer' value='" +
          _a.QCValue +
          "'><span class='lbl' for='" +
          _a.QCValue +
          "'>" +
          _a.QCValue +
          "</span></label></div>"
        );
        // "<input class='radio-col-green ace' type='radio' id='"+_a.QCKey+"' name='answer' value='"+_a.QCValue+"'/> <label for='"+_a.QCValue+"'>"+_a.QCValue+"</label>";
        break;
      case "CM":
        return (
          "<div class='checkbox'><label><input class='filled-in chk-col-green ace ace-checkbox-2' type='checkbox' id='" +
          _a.QCKey +
          "' name='" +
          _a.QCKey +
          "' value='" +
          _a.QCValue +
          "'/><span class='lbl'>" +
          _a.QCValue +
          "</span></label>"
        );
        // "<input class='filled-in chk-col-green ace' type='checkbox' id='"+_a.QCKey+"' name='"+_a.QCKey+"' value='"+_a.QCValue+"'/> <label for='"+_a.QCKey+"'>"+_a.QCValue+"</label>";
        break;
    }
  }

  showAssessment() {
    console.log("Assessment Hidden");
    jQuery("#tblAssessmentQuestionTBL").hide();
    jQuery("#assessment").show();
  }

  showAssessmentQuestion() {
    console.log("Assessment Shown");
    jQuery("#tblAssessmentQuestionTBL").show();
    jQuery("#assessment").hide();
  }

  addTextBox() {
    this.resetQuestionOptionViewModel();
    this._questionOptionViewModel.OrderID = -1;
    this._questionOptionViewModel._id = this._selectedAssessment.AssessmentQuestionID;
    if(this._selectedAssessment.AQType=="MTX"){
      this._questionOptionViewModel.Control = "CAO";
      jQuery("#QComment").show();
    }else{
      this._questionOptionViewModel.Control = this._selectedAssessment.AQType;
      jQuery("#QComment").hide();
    }
  }
  addCommentBox(){
    this.resetQuestionOptionViewModel();
    this._questionOptionViewModel.OrderID = -1;
    this._questionOptionViewModel._id = this._selectedAssessment.AssessmentQuestionID;
    jQuery("#QComment").hide();
    if(this._selectedAssessment.AQType=="MTX"){
      this._questionOptionViewModel.Control = "TA";
    }
  }
  saveTextBox(formData: QuestionOptionViewModel) {
    try {
      formData._id = this._selectedAssessment.AssessmentQuestionID;
      // console.log("Question Option : " + JSON.stringify(formData));
      jQuery("#modal-loading").modal("show");
      this._assessmentRepositoryServiceCall
        .insertOrUpdate(this._urlConstant.QuestionOptionModule, formData)
        .subscribe(
          (data) => {
            jQuery("#modal-loading").modal("hide");
            // console.log(JSON.stringify(data));
            if (data.StatusCode === 0) {
              jQuery("#_alertMessageText").text("Error in adding Content.");
              jQuery("#alertMessageDialog").modal("hide");
            } else {
              this.getAssessment(this._selectedAssessment, false);
              console.log(
                "Question Option Data List : " +
                  JSON.stringify(this._questionOptionDataList)
              );
              this.showToast(" Saved Successfully.", "gritter-light");
              jQuery("#addOrEditQCOB").modal("hide");
              jQuery("#addOrEditQCTA").modal("hide");
            }
          },
          (error) => alert(error),
          () => console.log("Add Course API Called")
        );
    } catch (error) {
      console.log("Error in saving the Audio : " + error);
    }
  }

  addQA() {
    this.resetQuestionAnswerViewModel();
    this._questionOptionViewModel.OrderID = -1;
    this._questionOptionViewModel._id = this._selectedAssessment.AssessmentQuestionID;
  }

  saveAnswers(formData: QuestionAnswerViewModel) {
    try {
      formData._id = this._selectedAssessment.AssessmentQuestionID;
      // console.log("Question Option : " + JSON.stringify(formData));
      jQuery("#modal-loading").modal("show");
      this._assessmentRepositoryServiceCall
        .insertOrUpdate(this._urlConstant.QuestionAnswerModule, formData)
        .subscribe(
          (data) => {
            jQuery("#modal-loading").modal("hide");
            // console.log(JSON.stringify(data));
            if (data.StatusCode === 0) {
              jQuery("#_alertMessageText").text("Error in adding Answers.");
              jQuery("#alertMessageDialog").modal("hide");
            } else {
              this.getAssessment(this._selectedAssessment, false);
              jQuery("#_alertMessageText").text("Saved Successfully.");
              jQuery("#alertMessageDialog").modal("hide");
            }
          },
          (error) => alert(error),
          () => console.log("Add Course API Called")
        );
    } catch (error) {
      console.log("Error in saving the Audio : " + error);
    }
  }

  getAll() {
    try {
      jQuery("#modal-loading").modal("show");
      this._assessmentRepositoryServiceCall
        .getAll(this._urlConstant.AssessmentQuestionModule)
        .subscribe(
          (data) => {
            jQuery("#modal-loading").modal("hide");
            if (data.StatusCode === 1) {
              this._assessmentQuestionDataList = [];
              this._assessmentQuestionDataList = data.ResponseObject;
            }
          },
          (error) => alert(error),
          () => console.log("Get All Courses API Called")
        );
    } catch (error) {
      console.log("Error in retriving Courses : " + error);
    }
  }

  getAbbrivatedString(qt) {
    switch (qt) {
      case "TA":
        return "Text Answer";
        break;
      case "CAO":
        return "Choose Any One";
        break;
      case "CM":
        return "Choose Many";
        break;
    }
  }

  getAllCourseMaterial() {
    try {
      jQuery("#modal-loading").modal("show");
      this._courseMaterialServiceCall
        .getAll(this._urlConstant.CourseMaterialModule)
        .subscribe(
          (data) => {
            jQuery("#modal-loading").modal("hide");
            if (data.StatusCode === 1) {
              this._courseMaterialDataList = [];
              this._courseMaterialDataList = data.ResponseObject;
              this._courseMaterialDataListFilter = [];
              this._courseMaterialDataListFilter = data.ResponseObject;
            }
          },
          (error) => alert(error),
          () => console.log("Get All Course Material API Called")
        );
    } catch (error) {
      console.log("Error in retriving Course Material : " + error);
    }
  }

  resetCourseViewModel() {
    this.action = "Add New ";
    this._assessmentQuestionViewModel = {
      AssessmentQuestionID: 0,
      FK_CourseMaterialID: 0,
      Title: "",
      AQType: "",
      Notes: "",
    };
    this._assessmentQuestionForm = this._fb.group({
      AssessmentQuestionID: ["", Validators.required],
      FK_CourseMaterialID: ["", Validators.required],
      Title: ["", Validators.required],
      AQType: ["", Validators.required],
      Notes: ["", Validators.required],
    });
  }
  addTextContent() {
    this.resetQuestionContentViewModel();
    this._questionContentViewModel.OrderID = -1;
    this._questionContentViewModel.QCKey = "TextContent";
    this._questionContentViewModel.QCValue = "";

    var editor = jQuery("#QCValue").data("kendoEditor");
    editor.value(this._questionContentViewModel.QCValue);
  }
  addVideo() {
    this.resetQuestionContentViewModel();
    this._questionContentViewModel.OrderID = -1;
    this._questionContentViewModel.QCKey = "Video";
    this._questionContentViewModel.QCValue = "";
  }
  addAudio() {
    this.resetQuestionContentViewModel();
    this._questionContentViewModel.OrderID = -1;
    this._questionContentViewModel.QCKey = "Audio";
    this._questionContentViewModel.QCValue = "";
  }
  addImage() {
    this.resetQuestionContentViewModel();
    this._questionContentViewModel.OrderID = -1;
    this._questionContentViewModel.QCKey = "Image";
    this._questionContentViewModel.QCValue = "";
  }
  resetQuestionContentViewModel() {
    this._questionContentViewModel = {
      ID: 0,
      _id: "",
      QCKey: "",
      QCValue: "",
      OrderID: 0,
    };
    this._questionContentForm = this._fb.group({
      ID: [0, Validators.required],
      _id: ["", Validators.required],
      QCKey: ["", Validators.required],
      QCValue: ["", Validators.required],
      OrderID: [0, Validators.required],
    });
  }

  resetQuestionAnswerViewModel() {
    this._questionAnswerViewModel = {
      ID: 0,
      _id: "",
      QCKey: "",
      Control: "",
      QCValue: "",
      OrderID: 0,
    };
    this._questionAnswerForm = this._fb.group({
      ID: [0, Validators.required],
      _id: ["", Validators.required],
      QCKey: ["", Validators.required],
      Control: ["", Validators.required],
      QCValue: ["", Validators.required],
      OrderID: [0, Validators.required],
    });
  }

  resetQuestionOptionViewModel() {
    this._questionOptionViewModel = {
      ID: 0,
      _id: "",
      QCKey: "",
      Control: "",
      Comment:"",
      QCValue: "",
      OrderID: 0,
    };
    this._questionOptionForm = this._fb.group({
      ID: [0, Validators.required],
      _id: ["", Validators.required],
      QCKey: ["", Validators.required],
      Control: ["", Validators.required],
      Comment: [""],
      QCValue: ["", Validators.required],
      OrderID: [0, Validators.required],
    });
  }

  resetQuestionnaireViewModel() {
    this._questionnaireViewModel = {
      ID: "",
      _id: "",
      AssessmentQuestionID: 0,
      ChapterID: "",
      ChapterSectionID: "",
      Option: [],
      Answers: [],
      QuestionContent: [],
      QuestionType: "",
      OrderID: 0,
    };
    this._assessmentQuestionForm = this._fb.group({
      ID: ["", Validators.required],
      _id: ["", Validators.required],
      AssessmentQuestionID: [0, Validators.required],
      ChapterID: ["", Validators.required],
      ChapterSectionID: ["", Validators.required],
      Option: [[], Validators.required],
      Answers: [[], Validators.required],
      QuestionContent: [[], Validators.required],
      QuestionType: ["", Validators.required],
      OrderID: [0, Validators.required],
    });
  }

  confirmRemoval(item) {
    this.action = "Remove";
    this.confirmationMessage = item.Title;
    this.removeItem = item;
    jQuery("#modal-remove").modal("show");
  }

  confirmRemovalQC(item) {
    console.log("Removing Item Confirmation");
    this.action = "Remove";
    this.removeItem = item;
    jQuery("#modal-removeqc").modal("show");
  }
  confirmRemovalTA(item) {
    this.action = "Remove";
    this.removeItem = item;
    jQuery("#modal-remove-qo").modal("show");
    // console.log("Removed Item : "+JSON.stringify(item));
  }

  confirmRemovalQATA(item) {
    this.action = "Remove";
    this.removeItem = item;
    jQuery("#modal-remove-qa").modal("show");
  }

  removeByQOID(id: number) {
    try {
      this.action = "Remove ";
      this._assessmentRepositoryServiceCall
        .removeByQOID(this._selectedAssessment.AssessmentQuestionID, id)
        .subscribe(
          (data) => {
            this.getAssessment(this._selectedAssessment, false);
            jQuery("#modal-remove-qo").modal("hide");
            this.showToast(
              "Question Option Removed Successfully.",
              "gritter-light"
            );
          },
          (error) => alert(error),
          () => console.log("Call Complete")
        );
    } catch (error) {
      console.log(error);
    }
  }

  removeByQAID(id: number) {
    try {
      this.action = "Remove ";
      this._assessmentRepositoryServiceCall
        .removeByQAID(this._selectedAssessment.AssessmentQuestionID, id)
        .subscribe(
          (data) => {
            this.getAssessment(this._selectedAssessment, false);
            jQuery("#modal-remove-qa").modal("hide");
            this.showToast("Answer Removed Successfully.", "gritter-light");
          },
          (error) => alert(error),
          () => console.log("Call Complete")
        );
    } catch (error) {
      console.log(error);
    }
  }

  removeByID(id: number) {
    try {
      this.action = "Remove ";
      this._assessmentRepositoryServiceCall
        .removeByID(this._selectedAssessment.AssessmentQuestionID, id)
        .subscribe(
          (data) => {
            this.getAssessment(this._selectedAssessment, false);
            jQuery("#modal-removeqc").modal("hide");
            this.showToast("Content Removed Successfully.", "gritter-light");
          },
          (error) => alert(error),
          () => console.log("Call Complete")
        );
    } catch (error) {
      console.log(error);
    }
  }

  remove(id: number) {
    try {
      this.action = "Remove ";
      this._assessmentRepositoryServiceCall
        .removeByID(this._urlConstant.AssessmentQuestionModule, id)
        .subscribe(
          (data) => {
            this.getAll();
            jQuery("#modal-remove").hide();
            this.showToast(
              this.removeItem.Title + " Removed Successfully.",
              "gritter-light"
            );
          },
          (error) => alert(error),
          () => console.log("Call Complete")
        );
    } catch (error) {
      console.log(error);
    }
  }
  edit(aq) {
    this._assessmentQuestionViewModel = aq;
    jQuery("#addOrEditMDL").modal("show");
  }
  cancelCM() {
    jQuery("#addOrEditMDL").modal("hide");
  }

  wizardNavigator(index,wo,jumpWizardStep){
    try{
      if(jumpWizardStep){
        if (jQuery("#_si"+index+"_").hasClass("step-index-style-disabled")){
          return 0;
        }
      }
      if(index>0 && index<=wo._totalSteps){
        for(let _index=1;_index<=wo._totalSteps;_index++){
          if(_index==index){
            wo._currentStep=_index;
            jQuery("#"+wo._wizardID+" #_si"+_index+"_").removeClass("step-index-style-active");
            jQuery("#"+wo._wizardID+" #_si"+_index+"_").removeClass("step-index-style-disabled");
            jQuery("#"+wo._wizardID+" #_si"+_index+"_").removeClass("step-index-style-enabled");
            jQuery("#"+wo._wizardID+" #_si"+_index+"_").addClass("step-index-style-active");
            jQuery("#"+wo._wizardID+" #__sic"+_index+"__").show();
            if(wo._currentStep==wo._totalSteps){
              jQuery(".btn-next").hide()
            }else{
              jQuery(".btn-next").show()
            }
            if(wo._currentStep==1){
              jQuery(".btn-previous").hide()
            }else{
              jQuery(".btn-previous").show()
            }
          }else{
            if (!jQuery("#_si"+_index+"_").hasClass("step-index-style-disabled")){
              jQuery("#_si"+_index+"_").removeClass("step-index-style-enabled");
              jQuery("#_si"+_index+"_").addClass("step-index-style-enabled");
            }
            jQuery("#"+wo._wizardID+" #__sic"+_index+"__").hide();
          }
        }    
      }
    }catch(error){
      console.log("Error in Wizard Navigator : "+error);
    }
  }
  wizardInitSetup(wo:wizardOptions){
    try{
      for(let _index=1;_index<=wo._totalSteps;_index++){
        if(_index==wo._startStep){
          wo._currentStep=_index;
          jQuery("#"+wo._wizardID+" #_si"+_index+"_").addClass("step-index-style-active");
          jQuery("#"+wo._wizardID+" #__sic"+_index+"__").show();
          if(wo._currentStep==wo._totalSteps){
            jQuery(".btn-next").hide()
          }else{
            jQuery(".btn-next").show()
          }
          if(wo._currentStep==1){
            jQuery(".btn-previous").hide()
          }else{
            jQuery(".btn-previous").show()
          }
        }else{
          jQuery("#"+wo._wizardID+" #_si"+_index+"_").removeClass("step-index-style-active");
          jQuery("#"+wo._wizardID+" #_si"+_index+"_").addClass("step-index-style-disabled");
          jQuery("#"+wo._wizardID+" #__sic"+_index+"__").hide();
        }
      }    
    }catch(error){
      console.log("Error in Wizard Navigator : "+error);
    }
  }


  showToast(message, style) {
    jQuery("#_alertMessageText").text(message);
    jQuery("#alertMessageDialog").modal("show");
  }
}
