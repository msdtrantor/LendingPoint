import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { PassingComponent } from './passing/passing.component';
import { HttpClientModule } from '@angular/common/http';
import { FormPostComponent } from './form-post/form-post.component'

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    PassingComponent,
    FormPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
