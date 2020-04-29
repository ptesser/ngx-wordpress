import { Injectable } from '@angular/core';

import { WpNetwork } from './wp-network';
import { WpRequestOptions, WpContext, WpPage } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class WpPages {

  constructor(
    private readonly network: WpNetwork,
  ) {
  }

  getList(args?: any, options?: WpRequestOptions) {
    return this.network.get<WpPage[]>('pages', args, options);
  }

  get(
    args: { id: number; context?: WpContext; password?: string },
    options?: WpRequestOptions,
  ) {
    const httpArgs = this.network.filter(args, ['id']);
    return this.network.get<WpPage>('pages/' + args.id, httpArgs, options);
  }

  create(
    args: WpPage,
    options?: WpRequestOptions,
  ) {
    return this.network.post<WpPage>('pages', args, {
      withCredentials: true,
      ...options
    });
  }

  update(
    args: WpPage,
    options?: WpRequestOptions,
  ) {
    const httpArgs = this.network.filter(args, ['id']);
    return this.network.post<WpPage>('pages/' + args.id, httpArgs, {
      withCredentials: true,
      ...options
    });
  }

  delete(
    args: { id: number },
    options?: WpRequestOptions
  ) {
    return this.network.delete<WpPage>(
      'pages/' + args.id,
      {
        force: true
      },
      {
        withCredentials: true,
        ...options
      }
    );
  }
}
