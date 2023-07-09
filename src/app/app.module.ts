import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { APP_ROUTES } from "./app.routes";
import { ComponentDocumentationComponent } from './views/component-documentation/component-documentation.component';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { CardComponent } from './components/card/card.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentDocumentationComponent,
    TopOfPageComponent,
    TopnavComponent,
    CardComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, {
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
