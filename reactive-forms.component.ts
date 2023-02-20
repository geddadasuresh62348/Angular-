import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  form:any;
  constructor(){
    this.form=new FormGroup({
      fullname:new FormControl('',[Validators.required,Validators.minLength(5)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      address:new FormControl('',[Validators.required]),
    });
  }
  get fullname(){
    return this.form.get('fullname');
  }
  get email(){
    return this.form.get('email');
  }
  get address(){
    return this.form.get('address')
  }
  onSubmit(){
    console.log(this.form.value);
  }
}
