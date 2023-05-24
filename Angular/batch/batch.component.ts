import { Component, OnInit } from "@angular/core";
import { BatchViewModel } from "./batch.viewmode";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProgramGroupService } from "../services/programgroup.service";
import { ProgramService } from "../services/program.service";
import { Http } from "@angular/http";
import { URLConstant } from "../app.url.constant";
import { BatchService } from "../services/batch.service";
import { ClassRoomService } from "../services/classroom.service";
import { CityService } from "../services/city.service";
import { LocationService } from "../services/location-service.service";
import { ClassRoomComponent } from "../class-room/class-room.component";
import { CityComponent } from "../city/city.component";
import { LocationComponent } from "../location/location.component";

declare var jQuery: any;

@Component({
  selector: "app-batch",
  templateUrl: "./batch.component.html",
  styleUrls: ["./batch.component.css"],
})
export class BatchComponent implements OnInit {
  public _batchViewModel: BatchViewModel;
  _batchForm: FormGroup;
  _batchDataList: any[] = [];
  _classRoomDataList: any[] = [];
  _locationDataList: any[] = [];
  _cityDataList: any[] = [];
  _programDataList: any[] = [];
  _programGroupDataList: any[] = [];
  confirmationMessage: string;
  messageTitle: string;
  messageCode: string;
  action: string;
  removeItemID: any = 0;
  removeItem: any;
  hasRecords = true;
  actionPeriod = false;
  _MCODE: string;

  constructor(
    private _httpCalls: Http,
    private _urlConstant: URLConstant,
    private _programServiceCall: ProgramService,
    private _batchServiceCall: BatchService,
    private _programGroupServiceCall: ProgramGroupService,
    private _fb: FormBuilder,
    private _classRoomService: ClassRoomService,
    private _cityService: CityService,
    private _locationServiceCall: LocationService
  ) {}

  resetBatchViewModel() {
    try {
      this._batchViewModel = {
        BatchID: 0,
        FK_ProgramGroupID: 0,
        FK_ClassRoomID: 0,
        Code: "",
        Title: "",
        StartDate: null,
        EndDate: null,
        Notes: "",
        Status: "Active",
      };
      this._batchForm = this._fb.group({
        BatchID: ["", Validators.required],
        FK_ProgramGroupID: ["", Validators.required],
        FK_ClassRoomID: ["", Validators.required],
        Code: ["", Validators.required],
        Title: ["", Validators.required],
        StartDate: ["", Validators.required],
        EndDate: ["", Validators.required],
        Notes: ["", Validators.required],
        Status: ["", Validators.required],
      });
    } catch (error) {
      console.log("Error in Resetting Batch View Model : " + error);
    }
  }

  ngOnInit() {
    try {
      this._MCODE = this._urlConstant.Batch;
      this.applyViewRule();
      this.resetBatchViewModel();
      this.getAllPrograms();
      this.getAll();
      this.getAllCities();
      jQuery(document).ready(function () {
        jQuery(".startDate").datepicker({
          format: "dd/mm/yyyy",
          language: "en",
          autoclose: true,
          todayHighlight: true,
          orientation: "auto",
        });
      });
    } catch (error) {
      console.log("Error on Init : " + error);
    }
  }

  applyViewRule() {
    try {
      if (localStorage.getItem("permission") != null) {
        let permission = JSON.parse(
          localStorage.getItem("permission").toString()
        );
        permission.forEach((element) => {
          jQuery("#" + element.ModuleCode).show();
          if (element.ModuleCode == this._MCODE) {
            if (element.Create == true) {
              jQuery("." + this._urlConstant.AddNewBTN).show();
            } else {
              jQuery("." + this._urlConstant.AddNewBTN).hide();
            }
            if (element.Update == true) {
              jQuery("." + this._urlConstant.SaveBTN).show();
            } else {
              jQuery("." + this._urlConstant.SaveBTN).hide();
            }
            if (element.Delete == true) {
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

  getAllPrograms() {
    try {
      this._programServiceCall
        .getMyPrograms()
        .subscribe(
          (data) => {
            if (data.StatusCode === 1) {
              this._programDataList = [];
              this._programDataList = data.ResponseObject;
            }
          },
          (error) => alert(error),
          () => console.log("Get My Programs API Called")
        );
    } catch (error) {
      console.log("Error in retriving Programs : " + error);
    }
  }
  getAllCities() {
    try {
      this._cityService.getAll(this._urlConstant.CityModule).subscribe(
        (data) => {
          if (data.StatusCode === 1) {
            this._cityDataList = [];
            this._cityDataList = data.ResponseObject;
          }
        },
        (error) => alert(error),
        () => console.log("Get All Cities API Called")
      );
    } catch (error) {
      console.log("Error in retriving Programs : " + error);
    }
  }

  getAllLocationsByCityID(val, preSet: Boolean) {
    try {
      this._locationServiceCall.getAllByCityID(val).subscribe(
        (data) => {
          if (data.StatusCode === 1) {
            this._locationDataList = [];
            this._locationDataList = data.ResponseObject;
            if (preSet) {
              // jQuery('#FK_LocationID').val(this._classRoomViewModel.FK_LocationID);
            }
          }
        },
        (error) => alert(error),
        () => console.log("Get All Locations API Called")
      );
    } catch (error) {
      console.log("Error in retriving Programs : " + error);
    }
  }

  getAllClassRoomByLocationIDandCityID(val, preSet: Boolean) {
    try {
      this._classRoomService.getAllByLocationID(val).subscribe(
        (data) => {
          if (data.StatusCode === 1) {
            this._classRoomDataList = [];
            this._classRoomDataList = data.ResponseObject;
            if (preSet) {
              jQuery("#FK_ClassRoomID").val(
                this._batchViewModel.FK_ClassRoomID
              );
            }
          }
        },
        (error) => alert(error),
        () => console.log("Get All Class Room API Called")
      );
    } catch (error) {
      console.log("Error in retriving Class Room : " + error);
    }
  }

  getAllProgramGroup(val, preLoad: boolean) {
    try {
      console.log(val);
      this._programGroupServiceCall.getAllByProgramID(val).subscribe(
        (data) => {
          if (data.StatusCode === 1) {
            this._programGroupDataList = [];
            this._programGroupDataList = data.ResponseObject;
            if (preLoad) {
              jQuery("#FK_ProgramGroupID").val(
                this._batchViewModel.FK_ProgramGroupID
              );
            }
          }
        },
        (error) => alert(error),
        () => console.log("Get All Program Group API Called")
      );
    } catch (error) {
      console.log("Error in retriving Program Groups: " + error);
    }
  }

  getAll() {
    try {
      this._batchServiceCall.getAll(this._urlConstant.BatchModule).subscribe(
        (data) => {
          if (data.StatusCode === 1) {
            this._batchDataList = [];
            this._batchDataList = data.ResponseObject;
            console.log(JSON.stringify(this._batchDataList));
          }
        },
        (error) => alert(error),
        () => console.log("Get All Batch API Called")
      );
    } catch (error) {
      console.log("Error on GetAll : " + error);
    }
  }

  addNew() {
    try {
      jQuery("#period").val("");
      this.action = "Add New ";
      this.resetBatchViewModel();
    } catch (error) {
      console.log("Error in Add New : " + error);
    }
  }

  edit(item) {
    try {
      console.log(JSON.stringify(item));
      jQuery("#errorMessage").text("");
      this.action = "Edit ";
      jQuery("#period").val("");
      if (item.StartDate !== null) {
        const d1 = item.StartDate.split("T")[0].split("-")[2];
        const m1 = item.StartDate.split("T")[0].split("-")[1];
        const y1 = item.StartDate.split("T")[0].split("-")[0];
        const sd = d1 + "/" + m1 + "/" + y1;
        item.StartDate = sd;
      }
      this.getAllProgramGroup(item.ProgramGroup.Program.ProgramID, true);
      jQuery("#FK_ProgramID").val(item.ProgramGroup.Program.ProgramID);
      this._batchViewModel = item;
      jQuery("#addOrEditMDL").modal("show");
    } catch (error) {
      console.log("Error in Editing the Item : " + error);
    }
  }

  save(isValid: boolean, formData: BatchViewModel, addNew: boolean) {
    if (jQuery("#StartDate").val() !== "") {
      const startDate = jQuery("#StartDate").val();
      const d1 = startDate.split("/")[0];
      const m1 = parseInt(startDate.split("/")[1], 10) - 1;
      const y1 = startDate.split("/")[2];
      formData.StartDate = new Date(Date.UTC(y1, m1, d1));
    }
    // console.log('Form Data : ' + JSON.stringify(formData));
    if (isValid) {
      this._batchServiceCall
        .insertOrUpdate(this._urlConstant.BatchModule, formData)
        .subscribe(
          (data) => {
            if (data.StatusCode === 0) {
              jQuery("#errorMessage").text(data.ErrorMessage);
            } else {
              this.getAll();
              if (addNew) {
                this.addNew();
                this.showToast(
                  formData.Title,
                  formData.Code,
                  "Saved",
                  "gritter-light"
                );
              } else {
                jQuery("#addOrEditMDL").modal("hide");
                this.showToast(
                  formData.Title,
                  formData.Code,
                  "Saved",
                  "gritter-light"
                );
              }
            }
          },
          (error) => alert(error),
          () => console.log("Add Batch API Called")
        );
    } else {
      jQuery("#errorMessage").text("Please fill all fields before saving.");
    }
  }

  confirmRemoval(item) {
    this.action = "Remove";
    this.removeItemID = item.BatchID;
    this.confirmationMessage = item.Title + "(" + item.Code + ")";
    this.messageTitle = item.Title;
    this.messageCode = item.Code;
    this.removeItem = item;
  }
  remove(id: number) {
    try {
      this.action = "Remove ";
      this._batchServiceCall
        .removeByID(this._urlConstant.BatchModule, id)
        .subscribe(
          (data) => {
            this.getAll();
            jQuery("#modal-remove").modal("hide");
            this.showToast(
              this.messageTitle,
              this.messageCode,
              this.action,
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

  showToast(name, code, action, style) {
    jQuery("#_alertMessageText").text(name + '(' + code + ') ' + action + ' Successfully.');
    jQuery("#alertMessageDialog").modal("show");
  }
}
