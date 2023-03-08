import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-question-item-v2',
  templateUrl: './question-item-v2.component.html',
  styleUrls: ['./question-item-v2.component.scss']
})
export class QuestionItemV2Component {

  @Input() question: string='';
  @Input() index:number=0;
  @Output() newQuestionEvent=new EventEmitter<any>();


  questionClickHandler(){

    this.newQuestionEvent.emit({
        question: this.question,
        index : this.index
    });
  }
}
