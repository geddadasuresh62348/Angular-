import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  title:string="angular COURSE";
  totalAmount:number=2345;
  decValue:number=3.4245;
  today:Date=new Date();

  obj:Object={name:'narayana',village:'palivela',district:'nalgonda'};
  marksPercent:number=0.89;

  yearArr:Array<number>=[2022,2011,2018,2021,2019];

  state:string="Telangana";

  dummyText:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ullam beatae alias dicta rem ea ab voluptates perferendis provident aspernatur, voluptatum dignissimos quidem molestias suscipit pariatur voluptatibus aliquam, animi cupiditate!"
}
