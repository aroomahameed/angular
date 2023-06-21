import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTablesModule } from '../../shared/custom-tables/custom-tables.module';
import { DialogsModule } from '../../shared/dialogs/dialogs.module';
import { CustomFormsModule } from '../../shared/forms/forms.module';

 

//component imports
import { PouploadingsComponent } from './pouploadings/pouploadings.component'
import { ReserveposComponent } from './reservepos/reservepos.component'
import { DelayreasoncodesComponent } from './delayreasoncodes/delayreasoncodes.component'

import { PodetailsComponent } from './podetails/podetails.component'
import { PosubsComponent } from './posubs/posubs.component'
import { PoheadsComponent } from './poheads/poheads.component'

//store imports
import * as pouploading from 'src/app/features/store/productionorder/pouploading'
import * as reservepo from 'src/app/features/store/productionorder/reservepo'
import * as delayreasoncode from 'src/app/features/store/productionorder/delayreasoncode'
import * as podetail from 'src/app/features/store/productionorder/podetail'
import * as posub from 'src/app/features/store/productionorder/posub'
import * as pohead from 'src/app/features/store/productionorder/pohead'
import * as client from 'src/app/features/store/customer/client'
import * as customer from 'src/app/features/store/customer/customer'
import * as factorycode from 'src/app/features/store/settings/factorycode'
import * as model from 'src/app/features/store/article/model'
import * as article from 'src/app/features/store/article/article'
import * as articlesize from 'src/app/features/store/article/articlesize'
import * as serviceidentifier from 'src/app/features/store/customer/serviceidentifier'
import * as productionline from 'src/app/features/store/article/productionline'
import * as articlematerial from 'src/app/features/store/article/articlematerial'



import { StoreModule } from '@ngrx/store';
import { PoheadFormComponent } from './poheads/pohead-form/pohead-form.component';
import { SubFormComponent } from './posubs/sub-form/sub-form.component';
import { DetailFormComponent } from './podetails/detail-form/detail-form.component';
import { PoMainComponent } from './po-main/po-main.component';

@NgModule({
  declarations: [PoheadsComponent, PoheadFormComponent, PosubsComponent, PodetailsComponent, DelayreasoncodesComponent, SubFormComponent, DetailFormComponent, PoMainComponent, ReserveposComponent, PouploadingsComponent],
  imports: [
    CommonModule,
    SharedModule,
    CustomTablesModule,
    DialogsModule,
    CustomFormsModule,

    //store for feature
    StoreModule.forFeature(pouploading.pouploadingFeatureKey, pouploading.reducer),
    StoreModule.forFeature(reservepo.reservepoFeatureKey, reservepo.reducer),
    StoreModule.forFeature(delayreasoncode.delayreasoncodeFeatureKey, delayreasoncode.reducer),
    StoreModule.forFeature(podetail.podetailFeatureKey, podetail.reducer),
    StoreModule.forFeature(posub.posubFeatureKey, posub.reducer),
    StoreModule.forFeature(pohead.poheadFeatureKey, pohead.reducer),
    StoreModule.forFeature(client.clientFeatureKey, client.reducer),
    StoreModule.forFeature(customer.customerFeatureKey, customer.reducer),
    StoreModule.forFeature(factorycode.factorycodeFeatureKey, factorycode.reducer),
    StoreModule.forFeature(model.modelFeatureKey, model.reducer),
    StoreModule.forFeature(article.articleFeatureKey, article.reducer),
    StoreModule.forFeature(articlesize.articlesizeFeatureKey, articlesize.reducer),
    StoreModule.forFeature(serviceidentifier.serviceidentifierFeatureKey, serviceidentifier.reducer),
    StoreModule.forFeature(productionline.productionlineFeatureKey, productionline.reducer),
    StoreModule.forFeature(articlematerial.articlematerialFeatureKey, articlematerial.reducer),


    EffectsModule.forFeature([ pohead.PoheadEffects,client.ClientEffects,customer.CustomerEffects,factorycode.FactorycodeEffects, posub.PosubEffects,model.ModelEffects,article.ArticleEffects, podetail.PodetailEffects,articlesize.ArticlesizeEffects, delayreasoncode.DelayreasoncodeEffects,serviceidentifier.ServiceidentifierEffects, reservepo.ReservepoEffects,productionline.ProductionlineEffects,articlematerial.ArticlematerialEffects, pouploading.PouploadingEffects]),
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'poheads' },
      {path: 'pouploading', component: PouploadingsComponent},
      {path: 'reservepos', component: ReserveposComponent},
      {path: 'delayreasoncodes', component: DelayreasoncodesComponent},
      {path: 'podetails', component: PodetailsComponent},
      {path: 'posubs', component: PosubsComponent},
      {path: 'poheads', component: PoheadsComponent},
      {path: 'heads', component: PoheadFormComponent},
      {path: 'po', component: PoMainComponent},
    
    ])
  ],
  entryComponents: [PoheadFormComponent,SubFormComponent,DetailFormComponent]
})

export class ProductionorderModule { }
