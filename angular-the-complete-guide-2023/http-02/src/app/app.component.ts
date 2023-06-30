import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Post } from './post.model';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching: boolean = false;
  error: string | null = null;

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    this.fechtPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createPost(postData).subscribe(() => {});
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.fechtPosts();
  }

  private fechtPosts() {
    this.postService.getPostsList()
    .subscribe((fetchedData) => {
      this.isFetching = false;
      this.loadedPosts = fetchedData;
    }, (error) => {
      this.error = error.message;
    })
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(
      () => {
        this.loadedPosts = [];
      }
    );
  }
}
