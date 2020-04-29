import { Injectable } from '@angular/core';

import { WpNetwork } from './wp-network';
import { WpRequestOptions, WpContext, WpTag } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class WpTags {

  constructor(private readonly network: WpNetwork) { }

  getList(
    args?: any,
    options?: WpRequestOptions,
  ) {
    return this.network.get<WpTag[]>('tags', args, options);
  }

  get(
    args: { id: number; context?: WpContext },
    options?: WpRequestOptions,
  ) {
    const httpArgs = this.network.filter(args, ['id']);
    return this.network.get<WpTag>('tags/' + args.id, httpArgs, options);
  }

  create(
    args: WpTag,
    options?: WpRequestOptions,
  ) {
    return this.network.post<WpTag>('tags', args, {
      withCredentials: true,
      ...options,
    });
  }

  update(
    args: WpTag,
    options?: WpRequestOptions,
  ) {
    const httpArgs = this.network.filter(args, ['id']);
    return this.network.post<WpTag>('tags/' + args.id, httpArgs, {
      withCredentials: true,
      ...options,
    });
  }

  delete(
    args: { id: number; },
    options?: WpRequestOptions,
  ) {
    return this.network.delete<WpTag>('tags/' + args.id, {
      force: true
    }, {
      withCredentials: true,
      ...options,
    });
  }

}
