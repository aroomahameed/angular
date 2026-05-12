import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, createSelector } from '@ngrx/store';
import { selectNavigationItems, NavigationItem } from 'src/app/store/navigation';
import { selectSettingsState } from 'src/app/store/settings';
import { AuthService } from 'src/app/core/auth/auth.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'smart-nav',
  templateUrl: './nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {

  vm$ = combineLatest(
    this.store.select(createSelector(
      selectNavigationItems,
      selectSettingsState,
      (items, settings) => ({ items, minified: settings.minifyNavigation })
    )),
    this.auth.permissions$,
    this.auth.user$
  ).pipe(
    map(([vm]) => ({
      ...vm,
      items: this.auth.filterNavigationItems(vm.items)
    }))
  );

  constructor(private store: Store<any>, public auth: AuthService) { }

  trackByFn(idx: number, item: NavigationItem) {
    return item.title + '_' + idx;
  }
}
