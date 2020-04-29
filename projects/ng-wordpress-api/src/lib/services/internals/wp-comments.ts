import { Injectable } from '@angular/core';

import { WpNetwork } from './wp-network';
import { WpRequestOptions, WpContext, WpComment } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class WpComments {

  constructor(
    private readonly network: WpNetwork,
  ) {}

  getList(
    args?: any,
    options?: WpRequestOptions,
  ) {
    return this.network.get<WpComment[]>('comments', args, options);
  }

  get(
    args: { id: number; context?: WpContext; password?: string; },
    options?: WpRequestOptions,
  ) {
    const httpArgs = this.network.filter(args, ['id']);
    return this.network.get<WpComment>('comments/' + args.id, httpArgs, options);
  }

  create(
    args: WpComment,
    options?: WpRequestOptions,
  ) {
    return this.network.post<WpComment>('comments', args, {
      withCredentials: true,
      ...options
    });
  }

  update(
    args: WpComment,
    options?: WpRequestOptions,
  ) {
    const httpArgs = this.network.filter(args, ['id']);
    return this.network.post<WpComment>('comments/' + args.id, httpArgs, {
      withCredentials: true,
      ...options
    });
  }

  delete(
    args: { id: number; password?: string; },
    options?: WpRequestOptions,
  ) {
    return this.network.delete<WpComment>('categories/' + args.id, {
      force: true
    }, {
      withCredentials: true,
      ...options
    });
  }

}
