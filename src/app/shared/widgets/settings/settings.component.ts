import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-widget-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingsForm;

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.settingsForm = this.formBuilder.group({
      username: ["", Validators.required],
      email:["", Validators.required,Validators.email],
      password:["",Validators.required],
      
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Form submitted");
    let userName = this.settingsForm.get(['name']).value;
    
    console.log(userName);
  }

  getErrorMessage() {
    if (this.settingsForm.hasError('required')) {
      return 'You must enter a value';
    }

    return this.settingsForm.hasError('email') ? 'Not a valid email' : '';
  }

}
