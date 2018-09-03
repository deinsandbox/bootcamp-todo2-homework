import { Component } from '@angular/core';
import { Post } from './post/post.interface';
import { POST } from './post/post.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'homework';
  posts: Post[];

  constructor(){
    this.posts = POST;
  }

  onRemovePost({id}){
    this.posts = this.posts.filter(post => post.id !== id);
  }
}
