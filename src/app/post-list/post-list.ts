import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post';
@Component({
  selector: 'app-post-list',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList implements OnInit{

  posts:any[] =[];
  loading =true;
  error ='';

  constructor(private postService: PostService){}

  ngOnInit(): void {

  
  this.postService.getPosts().subscribe({
    next: (response: any[]) => {
      console.log(response);
      this.posts = response;
      this.loading = false;
      // console.log('Loading Status:', this.loading);
    },
    error: (err) => {
      console.error(err);
      this.error = 'Unable to Load Posts';
      this.loading = false;
      // console.log('Loading Status:', this.loading);
    }
  });

}
}
