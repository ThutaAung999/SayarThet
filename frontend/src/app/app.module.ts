import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ProfileComponent } from './components/profile/profile.component';
import { QuestionContainerComponent } from './components/question-container/question-container.component';
import { QuestionBoxComponent } from './components/question-box/question-box.component';
import { QuestionItemComponent } from './components/question-item/question-item.component';
import { QuestionItemV2Component } from './components/question-item-v2/question-item-v2.component';
import { BorderComponent } from './contentprojection/border/border.component';
import { PipeDemoComponent } from './pipe/pipe-demo/pipe-demo.component';
import { HighlightDirective } from './attributedirective/highlight.directive';
import {ReactiveFormsModule} from "@angular/forms";
import { ReactiveFormDemoComponent } from './form/reactive-form-demo/reactive-form-demo.component';
import {ModalModule} from "ngx-bootstrap/modal";

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ParentComponent,
    ChildComponent,
    ProfileComponent,
    QuestionContainerComponent,
    QuestionBoxComponent,
    QuestionItemComponent,
    QuestionItemV2Component,
    BorderComponent,
    PipeDemoComponent,
    HighlightDirective,
    ReactiveFormDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class
AppModule { }
