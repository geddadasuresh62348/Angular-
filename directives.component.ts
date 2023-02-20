import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  // NgFor
  postArray: Array<string> = [
    'Digital Assistant',
    'Welfare Assistant',
    'Agriculture Assistant',
  ];
  constructor() {
    for (const i in this.postArray) {
      console.log(this.postArray[i]);
    }
  }

  // Fetching object array using *ngFor directive
  objArray: Array<any> = [
    { name: 'pushpa', village: 'chittoor' },
    { name: 'bheemla', village: 'karnool' },
    { name: 'Narasimham', village: 'vizag' },
  ];
  addNewData(){
    this.objArray.push({ name: 'Narasimham', village: 'vizag' })
  }
  deleteData(index:any){
    // const index=this.objArray.indexOf(post);
    this.objArray.splice(index,1);
    this.objArray
  }

// ngSwitch
 stepForm:any;
 onClick(step:any){
  this.stepForm=step;
 }

//  ngStyle
 isActive:boolean=true;
}
