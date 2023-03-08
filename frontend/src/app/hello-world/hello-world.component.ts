import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit{

  data=100;

  constructor() {
    console.log("HelloWorldComponent is created");
  }
  ngOnInit(): void {
    console.log("HelloWorld ngOnInit")
  }

  onClick(){
    this.data++;
  }

  // Lifecycle events

  ngDoCheck(){
    console.log("ngDoCheck is called.");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit is called.");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked is called.");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit is called.")
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked is called.")
  }

}
