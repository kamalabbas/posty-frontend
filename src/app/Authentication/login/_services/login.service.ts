import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserInfoService } from '../../_services/user-info.service';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/commonInterfaces/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private userInfo: UserInfoService, private router: Router) {}

  // login(email: string, password: string): void {
  //   this.http
  //     .post(environment.api + 'login', { email: email, password: password }).subscribe((res) => {
  //       this.userInfo.updateUserInfo(res);
  //       this.setUserToLocalStorage(res);
  //       this.router.navigate(['/']);
  //     }, err => {
  //       throwError(() => new Error(err))
  //     });
  // }

  login(email: string, password: string): void {
    this.http.post<UserInterface>(environment.api + 'login', { email: email, password: password}).subscribe({
      next:(res: UserInterface) => {
        this.userInfo.updateUserInfo(res);
        this.setUserToLocalStorage(res);
        this.router.navigate(['/']);
      },
      error:(err: any) => {
        throwError(() => new Error(err));
      }
    })
  }

  setUserToLocalStorage(user: UserInterface) {
    localStorage.setItem('userInfo', JSON.stringify(user));
  }
}
