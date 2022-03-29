import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInterface } from 'src/app/commonInterfaces/user';
import { environment } from 'src/environments/environment';
import { UserInfoService } from './user-info.service';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  constructor(private http: HttpClient, private router: Router, private userInfoService: UserInfoService) {}

  logout(): Observable<any> {
    const api = this.http.post(environment.api + 'logout', null);
    localStorage.removeItem('userInfo');
    this.userInfoService.updateUserInfo(null);
    this.router.navigate(['/']);
    return api;
  }
}
