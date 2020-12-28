import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteSelectedService {

  private siteSelectedNotifySource = new Subject<string>();
  


  siteSelectedNotification = this.siteSelectedNotifySource.asObservable();
  

  constructor() { }

  notifySiteSelected(site:string){
    this.siteSelectedNotifySource.next(site);
  }

  
}
