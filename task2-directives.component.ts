import { Component } from '@angular/core';

@Component({
  selector: 'app-task2-directives',
  templateUrl: './task2-directives.component.html',
  styleUrls: ['./task2-directives.component.css']
})
export class Task2DirectivesComponent {
  bool:Boolean=true;
  custDetails:Array<any>=[];
  custName:any;
  custEmail:any;
  custAddress:any;
  constructor(){
  }
  saveData(){
    this.custDetails.push({"name":this.custName,"email":this.custEmail,"address":this.custAddress});
    console.log(this.custDetails);
  }
  onDelete(i:any){
    this.custDetails.splice(i,1);
  }
}
