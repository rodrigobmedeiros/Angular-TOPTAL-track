import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Subscription } from 'rxjs';
import { Post } from './post.model';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching: boolean = false;
  error: string | null = null;
  subscription: Subscription = new Subscription();

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    this.subscription = this.postService.error.subscribe((errorMessage) => {
      alert(errorMessage);
    })
    this.fechtPosts();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createPost(postData);
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
