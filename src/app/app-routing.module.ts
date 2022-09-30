import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { ResumeTemplateComponent } from './resume-template/resume-template.component';

const routes: Routes = [
  {path:'', component:ResumeTemplateComponent},
  {path:'resume', component: DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
