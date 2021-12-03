import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceItemComponent } from './components/service-item/service-item.component';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { paths } from './shared/service-module-constants';

const routes: Routes = [
  { path: paths.serviceList, component: ServiceListComponent },
  { path: paths.serviceItem, component: ServiceItemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
