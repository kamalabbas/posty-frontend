import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable, ReplaySubject } from 'rxjs';
import { UserInterface } from 'src/app/commonInterfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  
  // private userInfoSubject = new BehaviorSubject<UserInterface>(null); 
  private userInfoSubject = new ReplaySubject<UserInterface|null>(); 
  public userInfo$ : Observable<UserInterface|null> = this.userInfoSubject.asObservable();

  constructor( ) {
    if(localStorage.getItem('userInfo')) {
      this.updateUserInfo(JSON.parse(localStorage.getItem('userInfo') || ''));
    }
  }

  updateUserInfo(user: UserInterface|null) {
    this.userInfoSubject.next(user);
  }
}
