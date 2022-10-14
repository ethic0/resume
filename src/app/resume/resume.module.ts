import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';
import { ResumeRoutingModule } from './resume-routing.module';


@NgModule({
  declarations: [
    DisplayComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule
  ]
})
export class ResumeModule { }
