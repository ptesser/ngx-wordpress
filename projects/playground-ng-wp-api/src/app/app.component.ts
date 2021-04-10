import { Component } from '@angular/core';

import { map, shareReplay } from 'rxjs/operators';

import { WpPosts, WpCategories, WpPageStatus, WpContext } from 'ng-wordpress-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly posts$ = this.wpPostApi.getList({ context: WpContext.VIEW }).pipe(
    map((posts) => posts.filter((p) => p.status === WpPageStatus.PUBLISH)),
    map((posts) => posts.map((p) => ({
      ...p,
      category: p.categories.length > 0
        ? this.wpCategoryApi.get({ id: p.categories[0], context: WpContext.EMBED }).pipe(shareReplay(1))
        : undefined,
    }))),
  );

  constructor(
    private readonly wpPostApi: WpPosts,
    private readonly wpCategoryApi: WpCategories,
  ) {
  }
}
