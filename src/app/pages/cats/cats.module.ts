import {NgModule} from '@angular/core';
import {CatsRoutingModule} from './cats-routing.module';
import {CatsComponent} from './cats.component';
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [CatsRoutingModule, CommonModule],
  declarations: [CatsComponent],
  exports: [CatsComponent]
})
export class CatsModule {
}
