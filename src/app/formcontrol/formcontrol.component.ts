import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-formcontrol',
  templateUrl: './formcontrol.component.html',
  styleUrls: ['./formcontrol.component.css']
})
export class FormcontrolComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  registerform= new FormGroup({
    name:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    address:new FormGroup({
      city:new FormControl('',Validators.required),
      state:new FormControl('',Validators.required),
      pin:new FormControl('',Validators.required)
    })
  });
  
  onsubmit(){
    console.warn(this.registerform.value);
    this.registerform.reset();
   // console.log(this.registerform.controls['name'].value);
    //console.log(this.registerform.get('name').value);
  }
}
