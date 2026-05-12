import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleFilter } from 'src/app/store/navigation';
import { APP_CONFIG } from 'src/app/app.config';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'smart-nav-info-card',
  templateUrl: './nav-info-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavInfoCardComponent {

  user$ = this.auth.user$;
  fallbackUser = APP_CONFIG.user;

  constructor(private store: Store<any>, private auth: AuthService) { }

  toggleFilter($event: MouseEvent) {
    $event.preventDefault();
    this.store.dispatch(toggleFilter());

  }
}
