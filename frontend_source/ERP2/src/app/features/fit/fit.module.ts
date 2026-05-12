import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTablesModule } from '../../shared/custom-tables/custom-tables.module';
import { DialogsModule } from '../../shared/dialogs/dialogs.module';
import { CustomFormsModule } from '../../shared/forms/forms.module';
//component imports
import { ProjectsComponent } from './projects/projects.component'
import { BalltestsComponent } from './balltests/balltests.component'
import { MaterialtestsComponent } from './materialtests/materialtests.component'
import { TestsComponent } from './tests/tests.component'



//store imports
import * as project from 'src/app/features/store/fit/project'
import * as balltest from 'src/app/features/store/fit/balltest'
import * as materialtest from 'src/app/features/store/fit/materialtest'
import * as test from 'src/app/features/store/fit/test'
import * as material from 'src/app/features/store/merchandise/material'
import * as model from 'src/app/features/store/article/model'
import { StoreModule } from '@ngrx/store';
import { TestFormComponent } from './projects/test-form/test-form.component';


@NgModule({
  declarations: [TestsComponent, TestFormComponent, MaterialtestsComponent, BalltestsComponent, ProjectsComponent],
  imports: [
    CommonModule,
    SharedModule,
    CustomTablesModule,
    DialogsModule,
    CustomFormsModule,
    //store for feature
    StoreModule.forFeature(project.projectFeatureKey, project.reducer),
    StoreModule.forFeature(balltest.balltestFeatureKey, balltest.reducer),
    StoreModule.forFeature(materialtest.materialtestFeatureKey, materialtest.reducer),
    StoreModule.forFeature(test.testFeatureKey, test.reducer),
    StoreModule.forFeature(material.materialFeatureKey, material.reducer),
    StoreModule.forFeature(model.modelFeatureKey, model.reducer),

    EffectsModule.forFeature([test.TestEffects, materialtest.MaterialtestEffects, material.MaterialEffects, balltest.BalltestEffects, model.ModelEffects, project.ProjectEffects]),
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'test' },
      { path: 'projects', component: ProjectsComponent },
      { path: 'balltests', component: BalltestsComponent },
      { path: 'materialtests', component: MaterialtestsComponent },
      { path: 'test', component: TestsComponent },
     
    ])
  ],
  entryComponents: [TestFormComponent, MaterialtestsComponent, BalltestsComponent]
})
export class FitModule { }
