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
      name: ["", Validators.required],
      email:["", Validators.required],
      password:["",Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Form submitted");
    let userName = this.settingsForm.get(['name']).value;
    
    console.log(userName);
  }

}
