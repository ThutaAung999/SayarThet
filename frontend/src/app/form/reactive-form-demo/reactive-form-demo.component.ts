import {Component, TemplateRef} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {Movie} from "../../model/movie.model";
import {MovieService} from "../../service/movie.service";

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss']
})
export class ReactiveFormDemoComponent {

  modalRef?:BsModalRef;

  movieForm;

  movies:Array<Movie>=[];

  /*movieForm=new FormGroup({
    name : new FormControl('',
                [Validators.required,Validators.minLength(4)]),
    year : new FormControl(''),
    director : new FormControl('')
  });
*/

  constructor(private formBuilder : FormBuilder,
              private modalService:BsModalService,private movieService:MovieService){
    this.movieForm=this.formBuilder.group({
      name :['', [Validators.required,Validators.minLength(4)]],
      year:[0,[Validators.required,  Validators.pattern("^[0-9]*$")]],
      director :['',Validators.required]
    });
    this.movies=movieService.getAllMovies();
  }

  openModal(template: TemplateRef<any>) {//handle the template from view
    this.modalRef = this.modalService.show(template);
  }

  formSubmit(){
    console.log("Movie Name : ", this.movieForm.value);

    let movie={...this.movieForm.value}  as Movie;
    this.movieService.addMovie(movie)
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
