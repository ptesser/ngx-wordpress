import { Injectable } from '@angular/core';

import { WpNetwork } from './wp-network';
import { WpRequestOptions, WpPost, WpContext } from '../../models';


@Injectable({
  providedIn: 'root',
})
export class WpPosts {

  constructor(private readonly network: WpNetwork) { }

  getList(args?: any, options?: WpRequestOptions) {
    return this.network.get<WpPost[]>('posts', args, options);
  }

  get(
    args: { id: number; context?: WpContext; password?: string },
    options?: WpRequestOptions
  ) {
    const httpArgs = this.network.filter(args, ['id']);
    return this.network.get<WpPost>('posts/' + args.id, httpArgs, options);
  }

  create(args: WpPost, options?: WpRequestOptions) {
    return this.network.post<WpPost>('posts', args, {
      withCredentials: true,
      ...options,
    });
  }

  update(args: WpPost, options?: WpRequestOptions) {
    const httpArgs = this.network.filter(args, ['id']);
    return this.network.post<WpPost>('posts/' + args.id, httpArgs, {
      withCredentials: true,
      ...options,
    });
  }

  delete(
    args: { id: number },
    options?: WpRequestOptions,
  ) {
    return this.network.delete<WpPost>(
      'posts/' + args.id,
      {
        force: true,
      },
      {
        withCredentials: true,
        ...options,
      }
    );
  }
}
