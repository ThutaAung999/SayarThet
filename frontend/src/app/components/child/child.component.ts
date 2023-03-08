import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input("data") value:number=0;

  ngOnChanges(){
    console.log("Child ngOnChanges :",this.value)
  }
}
