import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-templet-driven-forms',
  templateUrl: './templet-driven-forms.component.html',
  styleUrls: ['./templet-driven-forms.component.css']
})
export class TempletDrivenFormsComponent {
  onSubmit(f:NgForm){
    console.log("form",f);
    
  }
  getFullName(f:NgModel){
    console.log(f);
    
  }
  getEmail(f:NgModel){
    console.log(f);
    
  }
  getAddress(f:NgModel){
    console.log(f);
    
  }
}
