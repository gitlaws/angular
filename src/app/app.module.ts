import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { APP_ROUTES } from "./app.routes";
import { ComponentDocumentationComponent } from './views/component-documentation/component-documentation.component';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentDocumentationComponent,
    TopOfPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
