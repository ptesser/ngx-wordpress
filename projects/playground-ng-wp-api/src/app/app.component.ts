import { Component } from '@angular/core';

import { map } from 'rxjs/operators';

import { WpPosts, WpCategories } from 'ng-wordpress-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly posts$ = this.wpPostApi.getList().pipe(
    map((posts) => posts.filter((p) => p.status === 'publish')),
    map((posts) => posts.map((p) => ({
      ...p,
      category: p.categories.length > 0 ? this.wpCategoryApi.get({ id: p.categories[0] }) : undefined,
    }))),
  );

  constructor(
    private readonly wpPostApi: WpPosts,
    private readonly wpCategoryApi: WpCategories,
  ) {
  }
}
