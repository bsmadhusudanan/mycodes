import { Component, OnInit } from '@angular/core';
import { ApplicationModuleViewModel } from './applicationmodule.viewmodel';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { ApplicationmoduleService } from '../services/applicationmodule.service';
import { URLConstant } from '../app.url.constant';
declare var jQuery: any;

@Component({
  selector: 'app-applicationmodule',
  templateUrl: './applicationmodule.component.html',
  styleUrls: ['./applicationmodule.component.css']
})
export class ApplicationmoduleComponent implements OnInit {

  public _appModuleViewModel: ApplicationModuleViewModel;
  _appModuleForm: FormGroup;
  _appModuleDataList: any[] = [];
  confirmationMessage: string;
  messageName: string;
  messageCode: string;
  action: string;
  removeItemID: any = 0;
  removeItem: any;

  constructor(private _httpCalls: Http, private _urlConstant: URLConstant,
     private _appModuleServiceCall: ApplicationmoduleService, private _fb: FormBuilder) {
  }

  ngOnInit() {
    try {
      this.resetApplicationModuleViewModel();
      this.getAll();
    } catch (error) {
      console.log('Error on Init : ' + error);
    }
  }

  getAll() {
    try {
      this._appModuleServiceCall.getAll(this._urlConstant.ApplicationModule)
      .subscribe(data => {
        if (data.StatusCode === 1) {
          this._appModuleDataList = [];
          this._appModuleDataList = data.ResponseObject;
        }
      } , error => alert(error), () => console.log('Get All City API Called'));
    } catch (error) {
      console.log('Error on GetAll : ' + error);
    }
  }

  addNew() {
    try {
      this.resetApplicationModuleViewModel();
    } catch (error) {
      console.log('Error in Add New : ' + error);
    }
  }
  resetApplicationModuleViewModel() {
   try {
      this._appModuleViewModel = {
        ApplicationModuleID: 0,
        Code: '',
        Name: '',
        NavigationURL: '',
        Description: '',
        Status: 1
     };
     this._appModuleForm = this._fb.group({
       'ApplicationModuleID' : ['', Validators.required],
       'Code' : ['', Validators.required],
       'Name' : ['', Validators.required],
       'NavigationURL' : ['', Validators.required],
       'Description' : ['', Validators.required],
       'Status' : ['', Validators.required]
     });
   } catch (error) {
     console.log('Error in resetting the Application Module View Model : ' + error);
   }
  }

  edit(item) {
    try {
      jQuery('#errorMessage').text('');
      this._appModuleViewModel = item;
      jQuery('#addOrEditMDL').modal('show');
    } catch (error) {
      console.log('Error in Editing the Item : ' + error);
    }
  }

  save(isValid: boolean, formData: ApplicationModuleViewModel, addNew: boolean) {
    if (isValid) {
      this._appModuleServiceCall.insertOrUpdate(this._urlConstant.ApplicationModule, formData)
      .subscribe(data => {
        if (data.StatusCode === 0) {
          jQuery('#errorMessage').text(data.ErrorMessage);
        } else {
          this.getAll();
          if (addNew) {
            this.addNew();
            this.showToast(formData.Name, formData.Code, 'Saved', 'gritter-light');
          } else {
            jQuery('#addOrEditMDL').modal('hide');
            this.showToast(formData.Name, formData.Code, 'Saved', 'gritter-light');
          }
        }
      } , error => alert(error), () => console.log('Add Application Module API Called'));
    } else {
      jQuery('#errorMessage').text('Please fill all fields before saving.');
    }
  }

  confirmRemoval(item) {
    this.action = 'Remove';
    this.removeItemID = item.ApplicationModuleID;
    this.confirmationMessage = item.Name + '(' + item.Code + ')';
    this.messageName = item.Name;
    this.messageCode = item.Code;
    this.removeItem = item;
  }

  remove(id: number) {
    try {
      console.log(id);
        this.action = 'Remove ';
        this._appModuleServiceCall.removeByID(this._urlConstant.ApplicationModule, id).subscribe(data => {
            this.getAll();
            jQuery('#modal-remove').modal('hide');
            this.showToast(this.messageName, this.messageCode, this.action, 'gritter-light');
          }, error => alert(error),
        () => console.log('Call Complete'));
    } catch ( error ) {
      console.log(error);
    }
  }

  showToast(name, code, action, style) {
    jQuery("#_alertMessageText").text(name + '(' + code + ') ' + action + ' Successfully.');
    jQuery("#alertMessageDialog").modal("show");
  }
}
