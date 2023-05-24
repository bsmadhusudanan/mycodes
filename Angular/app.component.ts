import { AfterViewInit, Component, OnInit } from "@angular/core";
import { AppConstant } from "./app.constant";
import { Router } from "@angular/router";
import { LoginService } from "./services/login.service";
import { URLConstant } from "./app.url.constant";
declare var jQuery: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit,AfterViewInit {
  pageTitle = "Dashboard";
  _userDisplayName: any;
  _moduleTitle:string;
  _menuItemDataList:any;
  _moduleMenuItemDataList:any;
  constructor(private _appConstant: AppConstant, private _router: Router,private _loginServiceCall:LoginService,private _urlConstant:URLConstant) {
    jQuery(".mmenu").hide();
  }
  ngAfterViewInit(): void {
    if (localStorage.getItem("permission") != null) {
      this._menuItemDataList = JSON.parse(
        localStorage.getItem("permission").toString()
      );
      this._menuItemDataList.forEach(element => {
        // console.log("Module Name :  " + element.ModuleName);
        jQuery("#" + element.ModuleCode).show();
      });
    }
  }
  

  ngOnInit() {
    console.log("Loading");
    this._moduleTitle="";
    jQuery(".mmenu").hide();
    this._menuItemDataList=[];
    this._moduleMenuItemDataList=[];
    if (localStorage.getItem("permission") != null) {
      this._menuItemDataList = JSON.parse(
        localStorage.getItem("permission").toString()
      );
      this._menuItemDataList.forEach(element => {
        jQuery("#" + element.ModuleCode).show();
      });
    }

    if (localStorage.getItem("accessToken") != null) {
      if (localStorage.getItem("accessToken").toString().length <= 10) {
        localStorage.clear();
        this._router.navigate(["/login"]);
      } else {
        this._userDisplayName = localStorage.getItem("displayName");
      }
    } else {
      this._userDisplayName = "";
      localStorage.clear();
      this._router.navigate(["/login"]);
    }
  }
  loadMenu(){
    if (localStorage.getItem("permission") != null) {
      this._menuItemDataList = JSON.parse(
        localStorage.getItem("permission").toString()
      );
    }
    // console.log("Menu Item Count : "+JSON.stringify(this._moduleMenuItemDataList));
    if(this._moduleMenuItemDataList.length==0){
      jQuery("#sidebar-container").hide();
      jQuery("#content").css("margin-left","0px");
    }else{
      jQuery("#sidebar-container").show();
      jQuery("#content").css("margin-left","255px");
    }
  }
  loadSubMenu(_module){
    try{
      // console.log("Module : "+JSON.stringify(_module));
      this._moduleTitle=_module.ModuleName;
      this._loginServiceCall.invokeByModuleMethodParameterWithToken(this._urlConstant.MemberModule,this._urlConstant.GetSubMenuByModuleCode,"?code="+_module.ModuleCode)
      .subscribe(
        data => {
          if (data.StatusCode === 0) {
            console.log("Menu Error Message "+data.ErrorMessage);
            jQuery("#errorMessageUpdateProfile").text(data.ErrorMessage);
          } else {
              this._moduleMenuItemDataList=[];
              this._moduleMenuItemDataList=data.ResponseObject;
              console.log("Menu Items "+JSON.stringify(this._moduleMenuItemDataList));
              if(this._moduleMenuItemDataList.length==0){
                jQuery("#sidebar-container").hide();
              }else{
                jQuery("#sidebar-container").show();
              }
          }
        },
        error => alert(error),
        () => console.log("Loading module menu items.")
      );
    }catch(error){
      console.log("Error in Loading Menu Items.");
    }
  }
  logout() {
    console.log("Redirecting");
    localStorage.clear();
    jQuery('#sidebar-container').hide();
    jQuery('.sidebar_container').hide();
    jQuery('#appnavtopbar').hide();
    jQuery('#navbar').hide();
    jQuery('#sidebar').hide();
    jQuery('#sidebar-container').hide();
    jQuery('.sidebar_container').hide();
    jQuery('#signup-box-2').hide();
    jQuery("#content").css("margin-left","0px");
    window.location.href="http://sisv2.cert.ae/sisv2app/#/login";
  }
}
