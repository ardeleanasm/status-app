import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserUpdateService } from './user-update.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-widget-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private _currentUser:User;
  subscription:Subscription

  constructor(private userUpdateService:UserUpdateService) { 
    this._currentUser=new User()
      .setUsername("TestUsername")
      .setEmail("test@testemail.com")
      .setPicture("https://material.angular.io/assets/img/examples/shiba2.jpg");
      this.subscription=userUpdateService.dataAnnounced.subscribe(data=>{
        console.log("Received: "+data.username);
        this._currentUser=data;
        })
  }


  ngOnInit(): void {

  }

  onUserUpdate(){

  }

  getUsername():string{
    return this._currentUser.username;
  }

  getEmail():string{
    return this._currentUser.email;
  }

  getPicture():string{
    return this._currentUser.picture;
  }

}
