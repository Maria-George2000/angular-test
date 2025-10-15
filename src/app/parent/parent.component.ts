import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ChildComponent } from "../child/child.component";
@Component({
  selector: 'app-parent',
  imports: [ReactiveFormsModule, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

   users  = new FormGroup({
    name: new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email])
  })
  submit(){
    console.log(this.users.value);
  }
   get formValue(){
    return this.users.value;
   }
}
