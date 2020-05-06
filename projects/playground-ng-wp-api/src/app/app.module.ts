import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgWordpressApiModule } from 'ng-wordpress-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgWordpressApiModule.forRoot({
      baseApiUrl: 'https://venividilegi.it/',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
