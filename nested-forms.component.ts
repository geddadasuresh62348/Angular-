import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup,Validators,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-nested-forms',
  templateUrl: './nested-forms.component.html',
  styleUrls: ['./nested-forms.component.css']
})
export class NestedFormsComponent {
  
    form:any;
    contactDetails:any
    contactRegex:string="[789][0-9]{9}"
    constructor(fb:FormBuilder){
      this.form=fb.group({
        fullname:['',[Validators.required,Validators.minLength(5)]],
        email:['',[Validators.required,Validators.email]],
        contactDetails:fb.group({
          address:['',Validators.required],
          shippingAddress:['',Validators.required],
          contactInfo:['',[Validators.required,Validators.pattern(this.contactRegex)]]
        }),
        skills:fb.array([])
      })

      // this.form=new FormGroup({
      // fullname:new FormControl('',[Validators.required,Validators.minLength(5)]),
      // email:new FormControl('',[Validators.required,Validators.email]),
      // contactDetails:new FormGroup({
      //     address:new FormControl("",Validators.required),
      //     shippingAddress:new FormControl('',Validators.required),
      //     contactInfo:new FormControl('',[Validators.required,Validators.pattern(this.contactRegex)]),
      //   }),
      //   skills:new FormArray([]),
      // });
    }
    // get fullname(){
    //   return this.form.get('fullname');
    // }
    // get email(){
    //   return this.form.get('email');
    // }
    // get address(){
    //   return this.form.get('contactDetails.address')
    // }
    // get ShippingAddress(){
    //   return this.form.get('contactDetails.shippingAddress')
    // }
    // get contactInfo(){
    //   return this.form.get('contactDetails.contactInfo')
    // }
    get skills(){
      return this.form.get('skills') as FormArray
    }
    onSubmit(){
      console.log(this.form.value);
      this.form.fullname='';
      this.form.email='';
      this.form.contactDetails='';
      
    }
    addSkills(skill:HTMLInputElement){
      (this.skills).push(new FormControl(skill.value))
      console.log(this.form.value);
      skill.value='';
    }
    removeSkills(index:any){
      this.skills.removeAt(index);
    }
  }
  
