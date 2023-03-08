import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss']
})
export class ReactiveFormDemoComponent {

  movieForm;

  /*movieForm=new FormGroup({
    name : new FormControl('',
                [Validators.required,Validators.minLength(4)]),
    year : new FormControl(''),
    director : new FormControl('')
  });
*/

  constructor(private formBuilder : FormBuilder){
    this.movieForm=this.formBuilder.group({
      name :['', [Validators.required,Validators.minLength(4)]],
      year:['',[Validators.required,  Validators.pattern("^[0-9]*$")]],
      director :['',Validators.required]
    });
  }
  formSubmit(){
    console.log("Movie Name : ", this.movieForm.value);
  }

  updateName(){
    /*this.name.setValue("Updated name");*/
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
