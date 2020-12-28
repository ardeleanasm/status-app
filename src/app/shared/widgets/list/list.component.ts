import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Site } from '../site.interface';


@Component({
  selector: 'app-widget-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private _siteList:Site[]=[
    {
      id: 1,
      url: "url1",
      report: {
        value:10,
      },
      config: {
        pingTime:10,
      }
    },
    {
      id: 2,
      url: "url2",
      report: {
        value:20,
      },
      config: {
        pingTime:20,
      }
    }

  ];
  
  private selectedSite:Site=undefined;

  constructor() {
    
  }

  ngOnInit(): void {
  }
  


  get siteList():Site[] {
    return this._siteList;
  }

  add(urlAddress:string){
    let isElementFound = (url:string, siteList:Site[]):boolean =>{
      if (siteList.find(el=>el.url==url)!=undefined) {
        return true;
      }
      return false;
    }
    let createNewSiteElement=(url:string, id:number):Site =>{
      return {
        id: id,
        url: url,
        report: {
          value:0,
        },
        config: {
          pingTime:0,
        }
      }
    }
    
    if (!isElementFound(urlAddress,this._siteList)) {
      let newId:number=0;
      if (this._siteList.length!=0) {
        newId = this._siteList[this._siteList.length-1].id+1;
      }
      
      const newSite:Site=createNewSiteElement(urlAddress,newId);
      this._siteList.push(newSite);
    }

  }

  delete(deletedSite:Site){
    console.log("Deleted ID: "+deletedSite.id)
    const objIndex = this._siteList.findIndex(element => element.id == deletedSite.id);
   
    if (objIndex != -1) {
      console.log("Deleted");
      this._siteList.splice(objIndex,1);
    }
    else {
      console.log("Could not delete");
    }
  }

  onSelect(site:Site){
    this.selectedSite=site;
  }
  
  getSelectedSite():Site{
    if (this.selectedSite != undefined){
      return this.selectedSite;
    }
    return {
      id: 0,
      url: "",
      report: {
        value:0,
      },
      config: {
        pingTime:0,
      }
    };
  }
}
