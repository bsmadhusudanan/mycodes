import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { URLConstant } from "../app.url.constant";
import { ImagegalleryService } from "../services/imagegallery.service";
import { GalleryService } from "../services/gallery.service";
declare var jQuery: any;

@Component({
  selector: "app-videogallery",
  templateUrl: "./videogallery.component.html",
  styleUrls: ["./videogallery.component.css"]
})
export class VideogalleryComponent implements OnInit {
  _videoGalleryDataList: any[] = [];
  constructor(
    private _httpCalls: Http,
    private _urlConstant: URLConstant,
    private _videoGalleryServiceCall: GalleryService
  ) {}
  ngOnInit() {
    this.getAllVideos();
  }
  getAllVideos() {
    try {
      jQuery("#modal-loading").modal("show");
      this._videoGalleryServiceCall.getAllVideos().subscribe(
        data => {
          jQuery("#modal-loading").modal("hide");
          if (data.StatusCode === 1) {
            this._videoGalleryDataList = [];
            this._videoGalleryDataList = data.ResponseObject;
            console.log(
              "Video Gallery " + JSON.stringify(this._videoGalleryDataList)
            );
          }
        },
        error => alert(error),
        () => console.log("Get All Video Gallery API Called")
      );
    } catch (error) {
      console.log("Error in retriving Video Gallery : " + error);
    }
  }

  textSearch(value: string) {
    try {
      jQuery("#modal-loading").modal("show");
      this._videoGalleryServiceCall.search(value,"vid").subscribe(
        data => {
          jQuery("#modal-loading").modal("hide");
          if (data.StatusCode === 1) {
            this._videoGalleryDataList = [];
            this._videoGalleryDataList = data.ResponseObject;
          }
        },
        error => alert(error),
        () => console.log("Get All Video Gallery API Called")
      );
    } catch (error) {
      console.log("Error in Search Text : " + error);
    }
  }

}
