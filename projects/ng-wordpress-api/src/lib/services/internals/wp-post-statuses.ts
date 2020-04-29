import { Injectable } from '@angular/core';

import { WpNetwork } from './wp-network';
import { WpContext, WpRequestOptions, WpPostStatus } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class WpPostStatuses {

  constructor(
    private readonly network: WpNetwork,
  ) {
  }

  getList(
    args: { context?: WpContext },
    options?: WpRequestOptions,
  ) {
    return this.network.get<WpPostStatus[]>('status', args, options);
  }

  get(
    args: { status: string; context?: WpContext },
    options?: WpRequestOptions,
  ) {
    const httpArgs = this.network.filter(args, ['status']);
    return this.network.get<WpPostStatus>('status/' + args.status, httpArgs, options);
  }

}
