import { Component,OnInit } from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {


  //userForm!: FormGroup;

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {}
   userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required,Validators.email]],
      phone: ['', [Validators.required,Validators.pattern("[6789][0-9]{9}")]],
      message: ['', [Validators.required]]
    })  
  
  
  get getControl(){
    return this.userForm.controls;
  }
  
  onSubmit(){
    console.warn(this.userForm.value);
   /* console.log("Name : " +this.userForm.controls['name'].value);
    console.log(this.userForm.controls['email'].value);
    console.log(this.userForm.controls['phone'].value);
    console.log(this.userForm.controls['message'].value);*/
    this.userForm.reset();
  }
}
