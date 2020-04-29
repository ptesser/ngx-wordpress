import { Injectable } from '@angular/core';

import { WpNetwork } from './wp-network';
import { WpRequestOptions, WpContext, WpMedia } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class WpMedias {

  constructor(
    private readonly network: WpNetwork,
  ) {
  }

  getList(
    args?: any,
    options?: WpRequestOptions
  ) {
    return this.network.get<WpMedia[]>('media', args, options);
  }

  get(
    args: { id: number; context?: WpContext },
    options?: WpRequestOptions,
  ) {
    const httpArgs = this.network.filter(args, ['id']);
    return this.network.get<WpMedia>('media/' + args.id, httpArgs, options);
  }

  create(
    args: WpMedia,
    options?: WpRequestOptions,
  ) {
    return this.network.post<WpMedia>('media', args, {
      withCredentials: true,
      ...options
    });
  }

  update(
    args: WpMedia,
    options?: WpRequestOptions,
  ) {
    const httpArgs = this.network.filter(args, ['id']);
    return this.network.post<WpMedia>('media/' + args.id, httpArgs, {
      withCredentials: true,
      ...options
    });
  }

  public delete(
    args: { id: number; },
    options?: WpRequestOptions,
  ) {
    return this.network.delete<WpMedia>('media/' + args.id, {
      force: true
    }, {
      withCredentials: true,
      ...options
    });
  }

}
