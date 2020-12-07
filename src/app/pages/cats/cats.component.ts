import {Component, OnInit} from '@angular/core';
import {CatsServices} from "../../services/cats.services";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {NotificationsService} from 'src/app/services/notifications.service';


@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  cats: any = []

  constructor(public _catsServices: CatsServices, private _ngxService: NgxUiLoaderService, public _notificationsService: NotificationsService) {
  }

  ngOnInit() {
    this._ngxService.startLoader("master");
    this.getData()
  }

  getData() {
    this._catsServices.getAll().subscribe((res: any) => {
      if (!res.error) {
        let {data} = res
        this.cats = data
      }
    }, (err) => {
      throw err;
    });
    this._ngxService.stopLoader("master");
  }

  deleteCat(id){
    this._catsServices.delete(id).subscribe((res: any) => {
      if (!res.error) {
        this._notificationsService.success(res.message)
        this.getData()
      }
    }, (err) => {
      this._notificationsService.error("Error al procesar los datos")
      throw err;
    });
  }
}
