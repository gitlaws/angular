import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentDocumentationComponent } from './views/component-documentation/component-documentation.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentDocumentationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
