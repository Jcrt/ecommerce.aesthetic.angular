import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AbstractFormComponent } from '../abstracts/abstract-form-component';

@Injectable({
  providedIn: 'root'
})
export class LeaveFormPageGuard implements CanDeactivate<AbstractFormComponent> {
  canDeactivate(
    component: AbstractFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot):
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (component.isDirty())
      return confirm(component.getCanDeactivateMessage());
    return !component.isDirty();  }
}
