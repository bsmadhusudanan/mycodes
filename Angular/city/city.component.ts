import { Component, OnInit } from "@angular/core";
import { CityViewModel } from "../city/city.viewmodel";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Http } from "@angular/http";
import { CityService } from "../services/city.service";
import { URLConstant } from "../app.url.constant";
declare var jQuery: any;

@Component({
  selector: "app-city",
  templateUrl: "./city.component.html",
  styleUrls: ["./city.component.css"],
})
export class CityComponent implements OnInit {
  public _cityViewModel: CityViewModel;
  _cityForm: FormGroup;
  _cityDataList: any[] = [];
  confirmationMessage: string;
  messageName: string;
  messageCode: string;
  action: string;
  removeItemID: any = 0;
  removeItem: any;
  hasRecords = true;
  _MCODE: string;
  constructor(
    private _httpCalls: Http,
    private _urlConstant: URLConstant,
    private _cityServiceCall: CityService,
    private _fb: FormBuilder
  ) {}

  ngOnInit() {
    try {
      this._MCODE = this._urlConstant.ClassRoom;
      this.applyViewRule();
      this._cityViewModel = {
        CityID: 0,
        Code: "",
        Name: "",
        Status: "Active",
        CreatedBy: 0,
        CreatedDT: "",
      };
      this._cityForm = this._fb.group({
        CityID: ["", Validators.required],
        Code: ["", Validators.required],
        Name: ["", Validators.required],
        Status: ["", Validators.required],
        CreatedBy: [0],
        CreatedDT: [""],
      });
      this.getAll();
    } catch (error) {
      console.log("Error on Init : " + error);
    }
  }

  applyViewRule() {
    try {
      // $('.modal').find('button#transfer').prop('disabled', 'disabled');
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

  getAll() {
    try {
      this._cityServiceCall.getAll(this._urlConstant.CityModule).subscribe(
        (data) => {
          if (data.StatusCode === 1) {
            this._cityDataList = [];
            this._cityDataList = data.ResponseObject;
            if (data.ResponseObject.length > 0) {
              this.hasRecords = true;
            } else {
              this.hasRecords = false;
            }
          }
        },
        (error) => alert(error),
        () => console.log("Get All City API Called")
      );
    } catch (error) {
      console.log("Error on GetAll : " + error);
    }
  }

  addNew() {
    try {
      this._cityViewModel = {
        CityID: 0,
        Code: "",
        Name: "",
        Status: "Active",
        CreatedBy: 0,
        CreatedDT: "",
      };
      this._cityForm = this._fb.group({
        CityID: ["", Validators.required],
        Code: ["", Validators.required],
        Name: ["", Validators.required],
        Status: ["", Validators.required],
        CreatedBy: [0],
        CreatedDT: [""],
      });
    } catch (error) {
      console.log("Error in Add New : " + error);
    }
  }

  edit(item) {
    try {
      jQuery("#errorMessage").text("");
      this._cityViewModel = item;
      jQuery("#addOrEditMDL").modal("show");
    } catch (error) {
      console.log("Error in Editing the Item : " + error);
    }
  }

  save(isValid: boolean, formData: CityViewModel, addNew: boolean) {
    if (isValid) {
      this._cityServiceCall
        .insertOrUpdate(this._urlConstant.CityModule, formData)
        .subscribe(
          (data) => {
            console.log(data);
            if (data.StatusCode === 0) {
              jQuery("#errorMessage").text(data.ErrorMessage);
            } else {
              this.getAll();
              if (addNew) {
                this.addNew();
                this.showToast(
                  formData.Name,
                  formData.Code,
                  "Saved",
                  "gritter-light"
                );
              } else {
                jQuery("#addOrEditMDL").modal("hide");
                this.showToast(
                  formData.Name,
                  formData.Code,
                  "Saved",
                  "gritter-light"
                );
              }
            }
          },
          (error) => alert(error),
          () => console.log("Add City API Called")
        );
    } else {
      jQuery("#errorMessage").text("Please fill all fields before saving.");
    }
  }

  confirmRemoval(item) {
    this.action = "Remove";
    this.removeItemID = item.CityID;
    this.confirmationMessage = item.Name + "(" + item.Code + ")";
    this.messageName = item.Name;
    this.messageCode = item.Code;
    this.removeItem = item;
  }
  remove(id: number) {
    try {
      console.log(id);
      this.action = "Remove ";
      this._cityServiceCall
        .removeByID(this._urlConstant.CityModule, id)
        .subscribe(
          (data) => {
            this.getAll();
            jQuery("#modal-remove").modal("hide");
            this.showToast(
              this.messageName,
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
    jQuery.gritter.add({
      title: "Manage City",
      text: name + "(" + code + ") " + action + " Successfully.",
      image: "",
      sticky: false,
      time: "",
      class_name: style,
    });
  }
}
