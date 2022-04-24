import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/_services/api.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient, private api: ApiService) { }

  getPosts(): Observable<any> {
    return this.api.get('posts');
  }

  createPost(post: any): Observable<any> {
    return this.api.post('posts', post);
  }

  like(id: number): Observable<any> {
    return this.http.post(environment.api + 'posts/' + id + "/likes", '');
  }

  unlike(id: number): Observable<any> {
    return this.http.delete(environment.api + "posts/" + id + "/likes");
  }

  getPost(postId: number): Observable<any> {
    return this.http.get(environment.api + 'posts/' + postId)
  }

  deletePost(postId: number): Observable<any> {
    return this.http.delete(environment.api + 'posts/' + postId)
  }

}
