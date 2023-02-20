import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  //1. string interpolation
  msg:string="message from DataBindingComponent";
  
  //2. property-binding
  imgUrl:string="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"

  //3. class-binding
  //4. style-binding
  bool:boolean=true;
  
  //5.event-binding
  buttonClick($event:any):void{
    console.log($event);
    console.log('button clicked');
    
  }
  
  //6.event-filtering
  // traditional way
  // onKeyUp($event:any):void{
    // console.log($event.key);
    // console.log($event.keyCode);
    // console.log('key up event working');
    //   if($event.keyCode===13){
      //     console.log('Enter key pressed'); 
      //   }
      // }
      // easy way
      // onKeyUp($event:any):void{
        //   console.log($event.target.value);
        // }
        onKeyUp(username:any):void{
          console.log("username"+username);
        }
        
        // two way data binding
        programmingLanguage:any;
        onKeyEnter(){
          console.log(this.programmingLanguage);
        }
        // one way data binding
        textValue:string="value coming from component"
        onKeyOneWay(){
          console.log(this.textValue);
          
        }
      }
      