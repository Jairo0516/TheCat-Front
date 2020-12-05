import { NgModule } from '@angular/core';

import { CatsRoutingModule } from './cats-routing.module';

import { CatsComponent } from './cats.component';


@NgModule({
  imports: [CatsRoutingModule],
  declarations: [CatsComponent],
  exports: [CatsComponent]
})
export class CatsModule { }
