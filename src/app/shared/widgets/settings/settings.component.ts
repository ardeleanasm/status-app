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
      email:["", Validators.required],
      password:["",Validators.required],
      passwordAgain:["",Validators.required],
      
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Form submitted");
    let userName = this.settingsForm.get(['username']).value;
    
    console.log(userName);
  }

  isValid(){
    if (this.settingsForm.get(['password'])!=this.settingsForm.get(['passwordAgain'])){
      return false;
    }
    return true;
  }
  getErrorMessage() {
    if (this.settingsForm.hasError('required')) {
      return 'You must enter a value';
    }

    return this.settingsForm.hasError('email') ? 'Not a valid email' : '';
  }

}
