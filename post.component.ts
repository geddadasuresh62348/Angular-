import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  title:string="List of posts";
  messagePost:string="post send successfully.";

  childPostMessage:string="From child post component";
  
  outputChildMessage:string="From child post component using output Decorator";
  @Input() fromParent:any;

  @Output() messageEvent=new EventEmitter<string>();

  sendMessage():void{
    this.messageEvent.emit(this.outputChildMessage);    
  }
  constructor(){}
  ngOnInit(): void {
    
  }
}
