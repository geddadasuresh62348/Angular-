import { visitAll } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
// import { noSpace } from '../validators/nospace.validators';
@Component({
  selector: 'app-custom-form-validation',
  templateUrl: './custom-form-validation.component.html',
  styleUrls: ['./custom-form-validation.component.css']
})
export class CustomFormValidationComponent {
  form:any;
  
    constructor(fb:FormBuilder, ){
      this.form=fb.group({
        username:['',[Validators.required,Validators.minLength(8)]],
        password:['',[Validators.required]],
      })
    }
}
