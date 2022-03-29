import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfoService } from './Authentication/_services/user-info.service';
import { map, catchError} from 'rxjs/operators';


@Injectable()
export class CommonInterceptor implements HttpInterceptor {
  userInfo: any;

  constructor(private userInfoService: UserInfoService) {
    this.userInfoService.userInfo$.subscribe((user) => {
      this.userInfo = user;
    });
  }

  intercept(request: HttpRequest<unknown>,next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.userInfo) {
      request = request.clone({
        headers: request.headers
          .set('Authorization',`Bearer ${this.userInfo ? this.userInfo.token : ''} `)
          .set('Content-Type', 'application/json'),
      });
    }

    // return next.handle(request);
    return next.handle(request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      })
    );
  }

  
  //   return next.handle(req).pipe(catchError((err) => {
  //     let error = Object.assign({},err);
  //     error.error.error = error.error.error || error.error.Error;
  //     error.error.Error = error.error.Error || error.error.error;
  //     switch (err.status) {
  //        case 401: {
  //          if (getToken() != undefined && getToken()!=null){
  //           this.auth.logout(false);
  //           this.dialog.closeAll();
  //           this.router.navigate(["/session-expired"]);
  //          }
  //          return thro
  // }
}
