import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../alert/alert.service';
import { User } from './user.model';

@Component({
  selector: 'app-widget-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingsForm;
  private options = {
    autoClose: false,
    keepAfterRouteChange: false
  };

  constructor(
    private formBuilder: FormBuilder,
    protected alertService: AlertService
  ) {
    this.settingsForm = this.formBuilder.group({
      username: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      passwordAgain: ["", Validators.required],

    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let result = new User()
      .setUsername(this.settingsForm.get(['username']).value)
      .setEmail(this.settingsForm.get(['email']).value)
      .setPassword(this.settingsForm.get(['password']).value, this.settingsForm.get(['passwordAgain']).value)
      .isValid();
      
    if (result.isLeft()) {
      this.alertService.warn(result.extract(), this.options);
    } else {
      this.alertService.success("Working", this.options);
    }


  }


}
