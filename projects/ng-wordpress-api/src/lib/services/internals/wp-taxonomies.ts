import { Injectable } from '@angular/core';

import { WpNetwork } from './wp-network';
import { WpContext, WpRequestOptions, WpTaxonomy } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class WpTaxonomies {

  constructor(private readonly network: WpNetwork) { }

  getList(
    args?: { type?: string; context?: WpContext; },
    options?: WpRequestOptions,
  ) {
    return this.network.get<WpTaxonomy[]>('taxonomies', args, options);
  }

  get(
    args: { taxanomy: string; context?: WpContext; },
    options?: WpRequestOptions,
  ) {
    const httpArgs = this.network.filter(args, ['taxanomy']);
    return this.network.get<WpTaxonomy>('taxonomies/' + args.taxanomy, httpArgs, options);
  }

}
