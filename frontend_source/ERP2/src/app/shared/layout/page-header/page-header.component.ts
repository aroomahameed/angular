import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { mobileNavigation, navigationFilter, toggleFilter, selectFilter } from 'src/app/store/navigation';
import { APP_CONFIG } from 'src/app/app.config';
import { Observable } from 'rxjs';

@Component({
  selector: 'smart-page-header',
  templateUrl: './page-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeaderComponent {

  avatar = APP_CONFIG.avatar;
  email = APP_CONFIG.email;
  user = APP_CONFIG.user;
  filter$: Observable<{active: boolean; text: string}> = this.store.select(selectFilter);

  constructor(private store: Store<any>) { }

  openMobileNav($event: MouseEvent) {
    $event.preventDefault();
    this.store.dispatch(mobileNavigation({open: true}));
  }

  search(text: string, filterActive: boolean) {
    if (!filterActive) {
      this.store.dispatch(toggleFilter());
    }
    this.store.dispatch(navigationFilter({ text }));
  }

}
