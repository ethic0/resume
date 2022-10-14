import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumeTemplateComponent } from './resume-template/resume-template.component';
import { TemplateRoutingModule } from './template-routing.module';


@NgModule({
  declarations: [
    ResumeTemplateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
