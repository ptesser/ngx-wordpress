import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgWordpressApiConfig } from './definitions';
import { baseApiUrlToken } from './tokens';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
  ],
  exports: []
})
export class NgWordpressApiModule {
  static forRoot(config: NgWordpressApiConfig): ModuleWithProviders<NgWordpressApiModule> {
    return {
      ngModule: NgWordpressApiModule,
      providers: [
        { provide: baseApiUrlToken, useValue: config.baseApiUrl },
      ],
    };
  }
}
