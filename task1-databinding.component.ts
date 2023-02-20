import { Component } from '@angular/core';

@Component({
  selector: 'app-task1-databinding',
  templateUrl: './task1-databinding.component.html',
  styleUrls: ['./task1-databinding.component.css']
})
export class Task1Component {
  postTitle:string="";
  postDetails:string="";
  imgUrl:string="";
  siteAddress:string="";
  addBackground:boolean=false;

  postTitleFunc():void{}

}
