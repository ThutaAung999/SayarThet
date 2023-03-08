import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() name:string='';
  @Output() nameClickEvent=new EventEmitter<string>();

  onClick(){
    console.log("Profile  ",  this.name,'  Click');
    this.nameClickEvent.emit(this.name);
  }
}
