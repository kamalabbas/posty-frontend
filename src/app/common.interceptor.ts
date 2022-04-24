import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfoService } from './Authentication/_services/user-info.service';
import { map, catchError} from 'rxjs/operators';


@Injectable()
export class CommonInterceptor implements HttpInterceptor {
  userInfo: any;


  // Subscribe to the user servic behoiver this way you can keep on tracking the user if looged in or not
  constructor(private userInfoService: UserInfoService) {
    this.userInfoService.userInfo$.subscribe((user) => {
      this.userInfo = user;
    });
  }

  intercept(request: HttpRequest<unknown>,next: HttpHandler): Observable<HttpEvent<unknown>> {
    // if there's a user create a request object and pass it through every api call
    if (this.userInfo) {
      request = request.clone({
        headers: request.headers
          .set('Authorization',`Bearer ${this.userInfo ? this.userInfo.token : ''} `)
          .set('Content-Type', 'application/json'),
      });
    }

    // Pass defaul request if the user is not logged in
    // return next.handle(request);
    return next.handle(request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      })
    );
  }


  // Fix this code in order to display errors when ever the be returned 500 or 400
  
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
