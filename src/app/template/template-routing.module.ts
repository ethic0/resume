import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeTemplateComponent } from './resume-template/resume-template.component';

const routes: Routes = [
  {
    path:'',
    component:ResumeTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
