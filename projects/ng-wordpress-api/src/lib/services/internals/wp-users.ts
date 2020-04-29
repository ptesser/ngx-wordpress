import { Injectable } from '@angular/core';

import { WpNetwork } from './wp-network';
import { WpUser, WpRequestOptions, WpContext, WpBaseUser } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class WpUsers {

  constructor(private readonly network: WpNetwork) { }

  getList(args?: any, options?: WpRequestOptions) {
    return this.network.get<WpUser[]>('users', args, { withCredentials: true, ...options });
  }

  get(
    args: { id: number; context?: WpContext; },
    options?: WpRequestOptions
  ) {
    const httpArgs = this.network.filter(args, ['id']);
    return this.network.get<WpUser>('users/' + args.id, httpArgs, { withCredentials: true, ...options });
  }

  getMe(
    args: { context?: WpContext; },
    options?: WpRequestOptions,
  ) {
    const httpArgs = this.network.filter(args, ['id']);
    return this.network.get<WpUser>('users/me', httpArgs, { withCredentials: true, ...options });
  }

  create(args: WpBaseUser, options?: WpRequestOptions) {
    return this.network.post<WpUser>('users', args, { withCredentials: true, ...options });
  }

  update(args: WpBaseUser, options?: WpRequestOptions) {
    const id = args.id;
    const httpArgs = this.network.filter(args, ['id']);

    return this.network.post<WpUser>('users/' + args.id, httpArgs, { withCredentials: true, ...options });
  }

  updateMe(args: WpBaseUser, options?: WpRequestOptions) {
    return this.network.post<WpUser>('users/me', args, { withCredentials: true, ...options });
  }

  delete(args: { id: number, reassign: number }, options?: WpRequestOptions) {
    const id = args.id;
    const httpArgs = this.network.filter(args, ['id']);

    return this.network.delete<WpUser>('users/' + args.id, { force: true, ...httpArgs }, { withCredentials: true, ...options });
  }

  deleteMe(args: { reassign: number }, options?: WpRequestOptions) {
    return this.network.delete<WpUser>('users/me', { force: true, ...args }, { withCredentials: true, ...options });
  }

}
