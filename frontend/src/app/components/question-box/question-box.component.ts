import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LoggerService} from "../../logger.service";

@Component({
  selector: 'app-question-box',
  templateUrl: './question-box.component.html',
  styleUrls: ['./question-box.component.scss']
})
export class QuestionBoxComponent {

  updateDisabled=true;
  haveBorder=true;


  @Input() value='';
  @Output() addItemEvent=new EventEmitter<string>();
  @Output() updateItemEvent=new EventEmitter<string>();

  constructor(private loggerService: LoggerService){}

  btnAddClick(newItem:string){
    this.addItemEvent.emit(newItem)
    this.loggerService.log("new Item added")
  }

  btnUpdateClick(updateItem: string){

    this.updateItemEvent.emit(updateItem)
  }
}

