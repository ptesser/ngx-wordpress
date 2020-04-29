import { Injectable } from '@angular/core';

import { WpNetwork } from './wp-network';
import { WpRequestOptions, WpSetting } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class WpSettings {

  constructor(
    private readonly network: WpNetwork,
  ) {
  }

  get(options?: WpRequestOptions) {
    return this.network.get<WpSetting>('settings', {}, { withCredentials: true, ...options });
  }

  update(args: WpSetting, options?: WpRequestOptions) {
    return this.network.post<WpSetting>('settings', args, { withCredentials: true, ...options });
  }

}
