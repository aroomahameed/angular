import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { CustomTablesModule } from '../../shared/custom-tables/custom-tables.module';
import { DialogsModule } from '../../shared/dialogs/dialogs.module';
import { CustomFormsModule } from '../../shared/forms/forms.module';
//component imports
import { ArticleqcasComponent } from './articleqcas/articleqcas.component'
import { ArticlematerialsubsComponent } from './articlematerialsubs/articlematerialsubs.component'
import { ArticleratesComponent } from './articlerates/articlerates.component'
import { ArticlematerialsComponent } from './articlematerials/articlematerials.component'
import { ProductionlinesComponent } from './productionlines/productionlines.component'
import { ArticlesizesComponent } from './articlesizes/articlesizes.component'
import { ArticlemesComponent } from './articlemes/articlemes.component'
import { ArticlesComponent } from './articles/articles.component'
import { CartonsComponent } from './cartons/cartons.component'
import { ModelsComponent } from './models/models.component'
import { SeasonsComponent } from './seasons/seasons.component'
import { RangesComponent } from './ranges/ranges.component'
import { ArticlecatagorysComponent } from './articlecatagorys/articlecatagorys.component'


//store imports
import * as articleqca from 'src/app/features/store/article/articleqca'
import * as articlematerialsub from 'src/app/features/store/article/articlematerialsub'
import * as articlerate from 'src/app/features/store/article/articlerate'
import * as articlematerial from 'src/app/features/store/article/articlematerial'
import * as productionline from 'src/app/features/store/article/productionline'
import * as articlesize from 'src/app/features/store/article/articlesize'
import * as articleme from 'src/app/features/store/article/articleme'
import * as article from 'src/app/features/store/article/article'
import * as carton from 'src/app/features/store/article/carton'
import * as model from 'src/app/features/store/article/model'
import * as season from 'src/app/features/store/article/season'
import * as range from 'src/app/features/store/article/range'
import * as articlecatagory from 'src/app/features/store/article/articlecatagory'
import * as client from 'src/app/features/store/customer/client'
import * as factorycode from 'src/app/features/store/settings/factorycode'
import * as uom from 'src/app/features/store/settings/uom'
import * as material from 'src/app/features/store/merchandise/material'


import { SharedModule } from 'src/app/shared/shared.module';
import { ArticleFromComponent } from './articles/article-from/article-from.component';
import { ArticlelibraryComponent } from './articlelibrary/articlelibrary.component';
import { ArticlesizeFormComponent } from './articlesizes/articlesize-form/articlesize-form.component';
import { PrdlinesFormComponent } from './productionlines/prdlines-form/prdlines-form.component';
import { MaterialFormComponent } from './articlematerials/material-form/material-form.component';
import { MeFormComponent } from './articlemes/me-form/me-form.component';
import { ModelFormComponent } from './models/model-form/model-form.component';
import { SubFormsComponent } from './articlematerialsubs/sub-forms/sub-forms.component';
import { RateFormComponent } from './articlerates/rate-form/rate-form.component';
import { QcaFormComponent } from './articleqcas/qca-form/qca-form.component';
@NgModule({
  declarations: [ArticlecatagorysComponent, RangesComponent, SeasonsComponent, ModelsComponent, CartonsComponent, ArticlesComponent, ArticlemesComponent, ArticlesizesComponent, ArticleFromComponent, ArticlelibraryComponent, ArticlesizeFormComponent, ProductionlinesComponent, PrdlinesFormComponent, ArticlematerialsComponent, MaterialFormComponent, MeFormComponent, ArticleratesComponent, ModelFormComponent, ArticlematerialsubsComponent, SubFormsComponent, RateFormComponent,ArticleqcasComponent, QcaFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    CustomTablesModule,
    DialogsModule,
    CustomFormsModule,
    
    //store for feature
    StoreModule.forFeature(articleqca.articleqcaFeatureKey, articleqca.reducer),
    StoreModule.forFeature(articlematerialsub.articlematerialsubFeatureKey, articlematerialsub.reducer),
    StoreModule.forFeature(articlerate.articlerateFeatureKey, articlerate.reducer),
    StoreModule.forFeature(articlematerial.articlematerialFeatureKey, articlematerial.reducer),
    StoreModule.forFeature(productionline.productionlineFeatureKey, productionline.reducer),
    StoreModule.forFeature(articlesize.articlesizeFeatureKey, articlesize.reducer),
    StoreModule.forFeature(articleme.articlemeFeatureKey, articleme.reducer),
    StoreModule.forFeature(article.articleFeatureKey, article.reducer),
    StoreModule.forFeature(carton.cartonFeatureKey, carton.reducer),
    StoreModule.forFeature(model.modelFeatureKey, model.reducer),
    StoreModule.forFeature(season.seasonFeatureKey, season.reducer),
    StoreModule.forFeature(range.rangeFeatureKey, range.reducer),
    StoreModule.forFeature(articlecatagory.articlecatagoryFeatureKey, articlecatagory.reducer),
    StoreModule.forFeature(client.clientFeatureKey, client.reducer),
    StoreModule.forFeature(factorycode.factorycodeFeatureKey, factorycode.reducer),
    StoreModule.forFeature(uom.uomFeatureKey, uom.reducer),
    StoreModule.forFeature(material.materialFeatureKey, material.reducer),
  
    EffectsModule.forFeature([articlecatagory.ArticlecatagoryEffects, range.RangeEffects, season.SeasonEffects, model.ModelEffects,client.ClientEffects,factorycode.FactorycodeEffects, carton.CartonEffects,uom.UomEffects, article.ArticleEffects, articleme.ArticlemeEffects, articlesize.ArticlesizeEffects, productionline.ProductionlineEffects, articlematerial.ArticlematerialEffects,material.MaterialEffects,articlematerialsub.ArticlematerialsubEffects,articlerate.ArticlerateEffects, articleqca.ArticleqcaEffects]),
    RouterModule.forChild([
      {path: '', redirectTo:'article-library', pathMatch: 'full'},
      {path: 'articleqcas', component: ArticleqcasComponent},
      {path: 'articlematerialsubs', component: ArticlematerialsubsComponent},
      {path: 'articlerates', component: ArticleratesComponent},
      {path: 'articlematerials', component: ArticlematerialsComponent},
      {path: 'productionlines', component: ProductionlinesComponent},
      {path: 'article-library', component: ArticlelibraryComponent},
      {path: 'articlesizes', component: ArticlesizesComponent},
      {path: 'articlemes', component: ArticlemesComponent},
      {path: 'articles', component: ArticlesComponent},
      {path: 'cartons', component: CartonsComponent},
      {path: 'models', component: ModelsComponent},
      {path: 'seasons', component: SeasonsComponent},
      {path: 'ranges', component: RangesComponent},
      {path: 'articlecatagorys', component: ArticlecatagorysComponent},
    ])
  
  ], 
   entryComponents: [ArticleFromComponent,ArticlesizeFormComponent,PrdlinesFormComponent,MaterialFormComponent,MeFormComponent,ModelFormComponent,SubFormsComponent,RateFormComponent,QcaFormComponent]

})
export class ArticleModule { }
