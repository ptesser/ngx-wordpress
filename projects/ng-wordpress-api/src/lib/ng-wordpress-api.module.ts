import { NgModule, ModuleWithProviders } from '@angular/core';

import { NgWordpressApiConfig } from './definitions';
import { baseApiUrlToken } from './tokens';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: []
})
export class NgWordpressApiModule {
  static forRoot(config: NgWordpressApiConfig): ModuleWithProviders {
    return {
      ngModule: NgWordpressApiModule,
      providers: [
        { provide: baseApiUrlToken, useValue: config.baseApiUrl },
      ],
    };
  }
}
