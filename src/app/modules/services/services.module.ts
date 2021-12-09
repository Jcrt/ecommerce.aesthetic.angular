import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceItemComponent } from './components/service-item/service-item.component';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { ServiceRoutingModule } from './service-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ServiceItemComponent,
    ServiceListComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    MaterialModule
  ],
  exports: [
    ServiceListComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServicesModule { }
