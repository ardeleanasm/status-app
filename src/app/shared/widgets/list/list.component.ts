import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SiteSelectedService } from '../site-selected.service';

@Component({
  selector: 'app-widget-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private _siteList:string[]=["test1","test2","test3","test4","test5","test6"];
  
  
  constructor(private siteSelectedService:SiteSelectedService) {
    
  }

  ngOnInit(): void {
  }
  


  get siteList():String[] {
    return this._siteList;
  }

  addSite(site:string) {
    this._siteList.push(site);
  }

  onSelect(site:string){
    console.log("Selected site: "+site);
    this.siteSelectedService.notifySiteSelected(site);
  }
}
