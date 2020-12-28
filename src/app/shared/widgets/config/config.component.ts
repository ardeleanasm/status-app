import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SiteSelectedService } from '../site-selected.service';

@Component({
  selector: 'app-widget-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
  
})
export class ConfigComponent implements OnDestroy,OnInit {
  private subscription:Subscription;

  private _selectedSite:string="";

  constructor(private siteSelectedService:SiteSelectedService) { 
    this.subscription = siteSelectedService.siteSelectedNotification.subscribe(this.siteSelectedNotification);
  }
  ngOnInit(): void {
    
  }

 

  siteSelectedNotification(val:string){
    console.log("Config received "+val);
    this._selectedSite=val;
  }

  get selectedSite(){
    return this._selectedSite;
  }

  ngOnDestroy() {
    
    this.subscription.unsubscribe();
  }
}
