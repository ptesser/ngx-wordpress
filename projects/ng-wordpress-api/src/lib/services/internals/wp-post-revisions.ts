import { Injectable } from '@angular/core';

import { WpNetwork } from './wp-network';
import { WpContext, WpRequestOptions, WpPostRevision } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class WpPostRevisions {

  constructor(
    private readonly network: WpNetwork,
  ) {
  }

  getList(
    args: { parent: number; context?: WpContext },
    options?: WpRequestOptions,
  ) {
    const httpArgs = this.network.filter(args, ['parent']);
    return this.network.get<WpPostRevision[]>('posts/' + args.parent + '/revisions', httpArgs, {
      withCredentials: true,
      ...options,
    });
  }

  get(
    args: { parent: number; id: number; context?: WpContext },
    options?: WpRequestOptions
  ) {
    const httpArgs = this.network.filter(args, ['parent', 'id']);
    return this.network.get<WpPostRevision>('posts/' + args.parent + '/revisions/' + args.id, httpArgs, {
      withCredentials: true,
      ...options,
    });
  }

  delete(
    args: { parent: number; id: number; },
    options?: WpRequestOptions
  ) {
    return this.network.delete<WpPostRevision>('posts/' + args.parent + '/revisions/' + args.id, {
      force: true
    }, {
      withCredentials: true,
      ...options,
    });
  }

}
