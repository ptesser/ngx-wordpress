import { Injectable } from '@angular/core';

import { WpNetwork } from './wp-network';
import { WpPostType, WpRequestOptions, WpContext } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class WpPostTypes {

  constructor(
    private readonly network: WpNetwork,
  ) {
  }

  getList(
    args: { context?: WpContext },
    options?: WpRequestOptions
  ) {
    return this.network.get<WpPostType[]>('types', args, options);
  }

  get(
    args: { type: string; context?: WpContext },
    options?: WpRequestOptions,
  ) {
    const httpArgs = this.network.filter(args, ['type']);
    return this.network.get<WpPostType>('types/' + args.type, httpArgs, options);
  }

}
