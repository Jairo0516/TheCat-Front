import {Component, OnInit} from '@angular/core';
import { NgxUiLoaderService } from "ngx-ui-loader";
import {ImageServices} from 'src/app/services/images.services';


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  images1: any = []
  images2: any = []

  constructor(public _imageServices: ImageServices,  private _ngxService: NgxUiLoaderService) {
  }

  ngOnInit() {
    this._ngxService.startLoader("master");
    this.getData();
  }

  getData() {
    this._imageServices.getAll().subscribe((res: any) => {
      if (!res.error) {
        let {data} = res
        this.images1 = data.slice(0,5)
        this.images2 = data.slice(5,10)
        this._ngxService.stopLoader("master");
      }
    }, (err) => {
      throw err;
    });

  }
  createFavorite(index,data){
    this._imageServices.createFavorite(data)
  }

}
