import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(method:string, config?:any): Observable<any> {
    return this.http.get<any>(`${environment.api}${method}`, config);
  }

  post(method: string, data?: any, config?: any): Observable<any> {
    return this.http.post(`${environment.api}${method}`, data, config);
  }

}
