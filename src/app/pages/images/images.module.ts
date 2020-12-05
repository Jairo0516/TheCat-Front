import { NgModule } from '@angular/core';

import { ImagesRoutingModule } from './images-routing.module';
import { ImagesComponent } from './images.component';
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [ImagesRoutingModule, CommonModule],
  declarations: [ImagesComponent],
  exports: [ImagesComponent]
})
export class ImagesModule { }
