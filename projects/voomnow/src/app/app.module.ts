import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgMatSelectModule } from '@ashish-core/ng-mat-select';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgMatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
