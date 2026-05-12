import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTablesModule } from '../../shared/custom-tables/custom-tables.module';
import { DialogsModule } from '../../shared/dialogs/dialogs.module';
import { CustomFormsModule } from '../../shared/forms/forms.module';

//component imports
import { WhentrysComponent } from './whentrys/whentrys.component'
import { LabballsComponent } from './labballs/labballs.component'




//store imports
import * as whentry from 'src/app/features/store/lab/whentry'
import * as labball from 'src/app/features/store/lab/labball'
import * as article from 'src/app/features/store/article/article'

import { StoreModule } from '@ngrx/store';
import { BallFormComponent } from './labballs/ball-form/ball-form.component';



@NgModule({
  declarations: [LabballsComponent, WhentrysComponent, BallFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    CustomTablesModule,
    DialogsModule,
    CustomFormsModule,
    //store for feature
    StoreModule.forFeature(whentry.whentryFeatureKey, whentry.reducer),
    StoreModule.forFeature(labball.labballFeatureKey, labball.reducer),
    StoreModule.forFeature(article.articleFeatureKey, article.reducer),

    EffectsModule.forFeature([labball.LabballEffects,article.ArticleEffects, whentry.WhentryEffects]),
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'labballs' },
      {path: 'whentrys', component: WhentrysComponent},
      {path: 'labballs', component: LabballsComponent},

    ])
  ],
  entryComponents: [WhentrysComponent,BallFormComponent]
})


export class LabModule { }
