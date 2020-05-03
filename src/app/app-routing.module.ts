import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { NewsEditorComponent } from './news-editor/news-editor.component';
import { PrecautionComponent } from './precaution/precaution.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'news', component:NewsComponent},
  {path:'addNews', component:NewsEditorComponent},
  {path:'precautions', component:PrecautionComponent},
  {path:'', redirectTo: 'dashboard', pathMatch: 'full'},
  {path:'**', redirectTo: 'dashboard', pathMatch: 'full'} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
