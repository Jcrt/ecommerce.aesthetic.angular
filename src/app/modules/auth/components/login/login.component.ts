import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractFormComponent } from 'src/app/modules/shared/forms/abstracts/abstract-form-component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends AbstractFormComponent implements OnInit {

  constructor(private route: Router) {
    super();
  }

  ngOnInit(): void {
  }

  backToPage(){
    this.route.navigate(['/services']);
  }

  override isDirty(): boolean{
    return true;
  }
}
