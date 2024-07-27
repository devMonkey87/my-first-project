import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NxBadgeModule } from '@aposin/ng-aquila/badge';
import { NxDocumentationIconModule } from '@aposin/ng-aquila/documentation-icons';
import { NxDropdownModule } from '@aposin/ng-aquila/dropdown';
import { NxIconModule } from '@aposin/ng-aquila/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisualizerComponent } from './visualizer/visualizer.component';

@NgModule({
  declarations: [AppComponent, VisualizerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NxDocumentationIconModule,
    NxIconModule,
    NxBadgeModule,
    NxDropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
