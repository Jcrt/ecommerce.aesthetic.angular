import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveFormPageGuard } from './forms/guards/leave-form-page.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [LeaveFormPageGuard],
})
export class SharedModule { }
