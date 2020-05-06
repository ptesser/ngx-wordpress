import { WpPageStatus } from './WpPageStatus';
import { WpCommentStatus } from './WpCommentStatus';

export interface WpPostBase {
  date?: string;
  date_gmt?: string;
  /** { rendered: string } */
  guid?: any;
  id?: number;
  link?: string;
  modified?: string;
  modified_gmt?: string;
  slug?: string;
  status?: WpPageStatus | string;
  type?: string;
  password?: string;
  /** { rendered: string } */
  title?: any;
  /** { rendered: string, rendered: boolean } */
  content?: any;
  author?: number;
  /** { rendered: string, protected: boolean } */
  excerpt?: any;
  featured_media?: number;
  comment_status?: WpCommentStatus | string;
  ping_status?: WpCommentStatus | string;
  meta?: any;
  template?: string;
}
