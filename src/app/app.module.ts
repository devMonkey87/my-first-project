import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NxBadgeModule } from '@aposin/ng-aquila/badge';
import { NxDocumentationIconModule } from '@aposin/ng-aquila/documentation-icons';
import { NxIconModule } from '@aposin/ng-aquila/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestTodoComponent } from './test-todo/test-todo.component';


@NgModule({
  declarations: [AppComponent, TestTodoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NxDocumentationIconModule,
    NxIconModule,
    NxBadgeModule,  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
