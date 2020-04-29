import { Injectable } from '@angular/core';

import { WpNetwork } from './wp-network';
import { WpRequestOptions, WpCategory, WpContext } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class WpCategories {

  constructor(
    private readonly network: WpNetwork,
  ) {
  }

  getList(
    args?: any,
    options?: WpRequestOptions,
  ) {
    return this.network.get<WpCategory[]>('categories', args, options);
  }

  get(
    args: { id: number; context?: WpContext },
    options?: WpRequestOptions,
  ) {
    const httpArgs = this.network.filter(args, ['id']);
    return this.network.get<WpCategory>('categories/' + args.id, httpArgs, options);
  }

  create(
    args: WpCategory,
    options?: WpRequestOptions,
  ) {
    return this.network.post<WpCategory>('categories', args, {
      withCredentials: true,
      ...options
    });
  }

  update(
    args: WpCategory,
    options?: WpRequestOptions,
  ) {
    const httpArgs = this.network.filter(args, ['id']);
    return this.network.post<WpCategory>('categories/' + args.id, httpArgs, {
      withCredentials: true,
      ...options
    });
  }

  delete(
    args: { id: number; },
    options?: WpRequestOptions,
  ) {
    return this.network.delete<WpCategory>('categories/' + args.id, {
      force: true
    }, {
      withCredentials: true,
      ...options
    });
  }

}
