import { Component ,Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  
 @Input() fromPost:any;
 
 constructor(){};
 ngOnInit(): void {
   
 }
}
