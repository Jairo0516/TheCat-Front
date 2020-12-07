import {NgModule} from '@angular/core';

import {CreateCatRoutingModule} from './create-routing.module';
import {CreateComponent} from './create.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [CreateCatRoutingModule, ReactiveFormsModule, CommonModule],
  declarations: [CreateComponent],
  exports: [CreateComponent]
})
export class CreateCatModule {

}
