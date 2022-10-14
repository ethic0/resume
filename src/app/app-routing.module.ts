import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path:'template',
    loadChildren: () => import('./template/template.module').then(m => m.TemplateModule)
  },
  {
    path:'resume',
    loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
