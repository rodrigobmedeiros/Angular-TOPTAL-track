import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, Subject, Subscription, throwError } from 'rxjs'
import { Post } from '../post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  error: Subject<string> = new Subject<string>();

  baseUrl: string = 'https://curso-angular-6aa6b-default-rtdb.firebaseio.com/posts.json';
  constructor(private http: HttpClient) { }

  public getPosts(): Observable<{ [key:string]: Post }> {
    return this.http.get<{ [key:string]: Post }>(this.baseUrl, {
      headers: new HttpHeaders({
        'custom-content': 'content'
      })
    });
  }

  public createPost(post: Post): Subscription {
    return this.http.post<{name: string}>(this.baseUrl, post).subscribe(() => {

    }, (error) => {
      this.error.next(error.message);
    })
  }

  public deletePosts(): Observable<Post[]> {
    return this.http.delete<Post[]>(this.baseUrl);
  }

  public getPostsList(): Observable<Post[]> {
    return this.getPosts().pipe(
      map((posts) => {
        let postsArray: Post[] = [];
        for (const key in posts) {
          if (posts.hasOwnProperty(key)) {
            postsArray.push({...posts[key], id: key})
          }
        }
        return postsArray;
      }),
      catchError((error) => {
        return throwError(error);
      })
    )
  }
}