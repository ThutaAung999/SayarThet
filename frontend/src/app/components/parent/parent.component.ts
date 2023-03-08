import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit{
  data=100

  names=["Aung Aung","Kyaw Kyaw","Tun Tun"];
  currentName:string='';

  ngOnInit(): void {
    this.currentName=this.names[0];
  }

  childNameClick( name :string ){
    this.currentName = name ;
  }

  onClick(){
    this.data++;
  }
}
