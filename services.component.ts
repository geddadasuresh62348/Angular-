import { Component } from '@angular/core';
import { PostService } from '../services-folder/post.service';
import { Post } from '../models/post';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers:[PostService],

})
export class ServicesComponent {
  postArr:Array<any>=[];
  constructor(){
    // let postservice=new PostService();
    // this.postArr=postservice.postList;
    // this.postArr=postservice.postList;
    // this.postArr=postservice.postEx;
  // }
  // addNewData(){
  //   let newPost:Post={
  //     id: 123, postTitle: 'post 10' 
    // }
    // this.postservice.addPost(newPost);
  }
  
}
