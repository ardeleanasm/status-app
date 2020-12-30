import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserUpdateService {

  //Observable source
  private dataAnnouncedSource = new Subject<User>();
  
  //Observable stream
  dataAnnounced = this.dataAnnouncedSource.asObservable();

  announceData(data:User){
    this.dataAnnouncedSource.next(data);
  }

  constructor() { }
}
