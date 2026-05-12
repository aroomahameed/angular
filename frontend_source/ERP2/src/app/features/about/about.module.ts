import { SharedModule } from './../../shared/shared.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {IntroductionComponent} from './introduction/introduction.component';
import {PrivacyComponent} from './privacy/privacy.component';
import {PanelsModule} from '../../shared/panels/panels.module';
import {StoreModule} from '@ngrx/store';
import {AccountEffects, accountFeatureKey, reducer as accountReducer} from '../store/finance/account';
import {EffectsModule} from '@ngrx/effects';
@NgModule({
    declarations: [IntroductionComponent, PrivacyComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            {path: '', pathMatch: 'full', redirectTo: 'introduction'},
            {
                path: 'introduction', component: IntroductionComponent,
                data: {breadcrumbs: ['Application Intel', 'Introduction']},
            },
            {
                path: 'privacy', component: PrivacyComponent,
                data: {breadcrumbs: ['Application Intel', 'Privacy']},
            },
        ]),
        PanelsModule,
        StoreModule.forFeature(accountFeatureKey, accountReducer),
        EffectsModule.forFeature([AccountEffects]),
    ],
})
export class AboutModule {
}
