import { NgModule } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LeaveFormPageGuard } from '../shared/forms/guards/leave-form-page.guard';
import { LoginComponent } from './components/login/login.component';
import { paths } from './shared/auth-module-constants';

const routes: Routes = [
  {
    path: paths.login,
    component: LoginComponent,
    canDeactivate: [LeaveFormPageGuard]
  } as Route
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

