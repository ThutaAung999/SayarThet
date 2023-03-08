import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-question-container',
  templateUrl: './question-container.component.html',
  styleUrls: ['./question-container.component.scss']
})
export class QuestionContainerComponent implements OnInit{

  questions:Array<string>=[];

  currentQuestion='';
  currentQuestionIndex=0;

  addItem(newItem : string){
    console.log("Event fired :",newItem)
    this.questions.push(newItem)
  }

  questionClicked(questionEvent:any){
    console.log("Parent question Clicled :",
      questionEvent.question,
      ", Index  ",questionEvent.index);
    this.currentQuestion=questionEvent.question;
    this.currentQuestionIndex=questionEvent.index;
  }

  updateItem(updateItem:string){
    this.questions[this.currentQuestionIndex]=updateItem;
  }

  ngOnInit(): void {
    console.log("questions.length :",this.questions.length)

  }

}
