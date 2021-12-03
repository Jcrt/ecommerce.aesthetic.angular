import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { paths } from './modules/auth/shared/auth-module-constants';

const routes: Routes = [
  { path: '', redirectTo: paths.login, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
