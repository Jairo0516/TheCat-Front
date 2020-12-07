import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {NotificationsService} from 'src/app/services/notifications.service';
import {CatsServices} from "../../../services/cats.services";
import {ImageServices} from "../../../services/images.services";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-cats',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  FormCat = new FormGroup({
    name: new FormControl(''),
    breed: new FormControl(''),
    age: new FormControl(''),
    image: new FormControl('')
  });

  catData: any = {
    name: "",
    breed: "",
    age: "",
    image: "",
    id: undefined,
  }
  breeds: any = []
  imagesFavorites: any = []

  constructor(public _notificationsService: NotificationsService, public _catsServices: CatsServices, public _imageServices: ImageServices,
              private _ngxService: NgxUiLoaderService, private _activatedRoute: ActivatedRoute,) {
  }

  ngOnInit() {
    this.catData.id = this._activatedRoute.snapshot.params['id'];
    this._ngxService.startLoader("master");
    this.getData()
  }

  selectImage(data: string) {
    this.catData.image = data
    this._notificationsService.success('Se ha seleccionado correctamente su imagen')
  }

  async onSubmit() {
    let data = this.FormCat.value

    if(this.catData.id!=undefined){
      this._catsServices.update(data,this.catData.id)
    }else{
      this._catsServices.create(data)
      this.FormCat.reset()
      this.catData.image = "./assets/images/Upload.png"
    }
  }

  getData() {
    this._catsServices.getAllBreed().subscribe((res: any) => {
      if (!res.error) {
        let {data} = res
        this.breeds = data.names
      }
    }, (err) => {
      throw err;
    });
    this._imageServices.getAllFavorites().subscribe((res: any) => {
      let {data} = res
      this.imagesFavorites = data
    }, (err) => {
      throw err;
    });
    if(this.catData.id!=undefined){
      this._catsServices.get(this.catData.id).subscribe((res: any) => {
        let {data} = res
        this.catData = data
        this.catData.id = data._id
      }, (err) => {
        throw err;
      });

    }else{
      this.catData.image = "./assets/images/Upload.png"
    }
    this._ngxService.stopLoader("master");
  }

}
