import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges, NgZone } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { SiteSelectedService } from '../site-selected.service';

@Component({
  selector: 'app-widget-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  
  
})
export class ReportComponent implements OnDestroy,OnInit,OnChanges{
  private subscription:Subscription;

  private _selectedSite:string="aa";
  private receivedValue="";
  constructor(private siteSelectedService:SiteSelectedService,zone:NgZone) {
    this.subscription = siteSelectedService.siteSelectedNotification.subscribe(this.siteSelectedNotification);

  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }
  ngOnInit(): void {
    
  }
  
  siteSelectedNotification(val:string){
    console.log("Report received "+ val);
    this.receivedValue=val;
    
  }
  
  get selectedSite() {
    return this._selectedSite;
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  ngDoCheck(){
    if (this._selectedSite!=this.receivedValue){
      this._selectedSite=this.receivedValue;
    }
    console.log("Checking");
  }
 
}
