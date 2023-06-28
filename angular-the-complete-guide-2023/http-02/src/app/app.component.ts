import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http.post(
      'https://curso-angular-6aa6b-default-rtdb.firebaseio.com/posts.json',
      postData
    ).subscribe((responseData) => {
      console.log(responseData);
    })
  }

  onFetchPosts() {
    // Send Http request
    this.http.get(
      'https://curso-angular-6aa6b-default-rtdb.firebaseio.com/posts.json'
    ).subscribe((data) => {
      alert(JSON.stringify(data));
    })
  }

  onClearPosts() {
    // Send Http request
  }
}
