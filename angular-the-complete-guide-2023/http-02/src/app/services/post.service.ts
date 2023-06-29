import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs'
import { Post } from '../post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl: string = 'https://curso-angular-6aa6b-default-rtdb.firebaseio.com/posts.json';
  constructor(private http: HttpClient) { }

  public getPosts(): Observable<{ [key:string]: Post }> {
    return this.http.get<{ [key:string]: Post }>(this.baseUrl);
  }

  public createPost(post: Post): Observable<{name: string}> {
    return this.http.post<{name: string}>(this.baseUrl, post);
  }

  public getPostsList(): Observable<Post[]> {
    return this.getPosts().pipe(map((posts) => {
      let postsArray: Post[] = [];
      for (const key in posts) {
        if (posts.hasOwnProperty(key)) {
          postsArray.push({...posts[key], id: key})
        }
      }
      return postsArray;
    }))
  }
}