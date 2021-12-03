import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceItemComponent } from './components/service-item/service-item.component';
import { MatCardModule } from '@angular/material/card';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { ServiceRoutingModule } from './service-routing.module';

@NgModule({
  declarations: [
    ServiceItemComponent,
    ServiceListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ServiceRoutingModule
  ],
  exports: [
    ServiceListComponent
  ]
})
export class ServicesModule { }
