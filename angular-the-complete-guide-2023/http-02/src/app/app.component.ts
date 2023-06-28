import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fechtPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http.post<Post>(
      'https://curso-angular-6aa6b-default-rtdb.firebaseio.com/posts.json',
      postData
    ).subscribe((responseData) => {
      console.log(responseData);
    })
  }

  onFetchPosts() {
    // Send Http request
    this.fechtPosts();
  }

  private fechtPosts() {
    this.http.get<{[s: string]: Post}>(
      'https://curso-angular-6aa6b-default-rtdb.firebaseio.com/posts.json'
    )
    .pipe(map((posts) => {
      let postsArray: Post[] = [];
      for (const key in posts) {
        if (posts.hasOwnProperty(key)) {
          postsArray.push({...posts[key], id: key})
        }
      }
      return postsArray;
    }))
    .subscribe((fetchedData) => {
      console.log(fetchedData);
    })
  }

  onClearPosts() {
    // Send Http request
  }
}
