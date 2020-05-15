import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgWordpressApiModule } from './../../../ng-wordpress-api/src/lib/ng-wordpress-api.module';

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
