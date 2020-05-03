import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule }    from '@angular/common/http';
import { DashBoardService } from './services/dashboard.service';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { LoginService } from './services/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { NewsEditorComponent } from './news-editor/news-editor.component';
import { NewsService } from './services/news.service';
import { PrecautionComponent } from './precaution/precaution.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NewsComponent,
    NewsEditorComponent,
    PrecautionComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DashBoardService, LoginService, AuthService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
