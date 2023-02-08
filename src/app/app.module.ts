import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MonPremierComposantComponent } from './components/mon-premier-composant.component';
import { AuthorAppComponent } from './components/component/author-app/author-app.component';

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComposantComponent,
    AuthorAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
