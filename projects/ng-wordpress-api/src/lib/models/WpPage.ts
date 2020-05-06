// import { WpPageStatus } from './shared/WpPageStatus';
// import { WpCommentStatus } from './shared/WpCommentStatus';
import { WpPostBase } from './WpPostBase';

export interface WpPage extends WpPostBase {
  parent?: number;
  menu_order?: number;
}
