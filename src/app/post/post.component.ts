import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from './post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() removePost = new EventEmitter<Post>();

  constructor() { }

  ngOnInit() {
  }

  onRemovePost(post: Post) {
    this.removePost.emit(post);
  }
}
