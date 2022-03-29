import { Component, OnInit } from '@angular/core';
import { PostsService } from '../_services/posts.service';
import { UserInfoService } from 'src/app/Authentication/_services/user-info.service';
import { UserInterface } from 'src/app/commonInterfaces/user';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any;
  userInfo: UserInterface|null|undefined;

  post: any = {
    body : ''
  };

  constructor(private postService: PostsService, private userInfoService : UserInfoService) {
    this.userInfoService.userInfo$.subscribe((res: UserInterface|null)=> {
      this.userInfo = res;
    })
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(res => {
      this.posts = res.data;
    })
  }

  createPost(): void {
    this.postService.createPost(this.post).subscribe(res => {
      this.posts.unshift(res);
      this.post.body = '';
    })
  }

  deletePost(post: any): void {
    this.postService.deletePost(post.id).subscribe(res => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    })
  }

  like(post: any) {
    if(post.liked) {
      this.postService.unlike(post.id).subscribe(res => {
        post.liked = false;
        post.postLikesCount = res;
      })
    } else {
      this.postService.like(post.id).subscribe(res => {
        post.liked = true;
        post.postLikesCount = res;
      })
    }
  }
}
