import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTablesModule } from '../../shared/custom-tables/custom-tables.module';
import { DialogsModule } from '../../shared/dialogs/dialogs.module';
import { CustomFormsModule } from '../../shared/forms/forms.module';
//component imports
import { MaterialseasonsComponent } from './materialseasons/materialseasons.component'
import { MaterialvendorsComponent } from './materialvendors/materialvendors.component'
import { MaterialsComponent } from './materials/materials.component'
import { SubcategoriesComponent } from './subcategories/subcategories.component'
import { CategorytypesComponent } from './categorytypes/categorytypes.component'
import { CategoriesComponent } from './categories/categories.component'

//store imports
import * as materialseason from 'src/app/features/store/merchandise/materialseason'
import * as materialvendor from 'src/app/features/store/merchandise/materialvendor'
import * as material from 'src/app/features/store/merchandise/material'
import * as subcategory from 'src/app/features/store/merchandise/subcategory'
import * as categorytype from 'src/app/features/store/merchandise/categorytype'
import * as category from 'src/app/features/store/merchandise/category'
import * as uom from 'src/app/features/store/settings/uom'
import * as vendor from 'src/app/features/store/settings/vendor'
import * as currency from 'src/app/features/store/settings/currency'
import * as season from 'src/app/features/store/article/season'
import { StoreModule } from '@ngrx/store';
import { MainComponent } from './main/main.component';
import { MaterialFormComponent } from './materials/material-form/material-form.component';
import { MaterialvendorFormComponent } from './materialvendors/materialvendor-form/materialvendor-form.component';
import { SeasonFromComponent } from './materialseasons/season-from/season-from.component';

@NgModule({
  declarations: [CategoriesComponent, CategorytypesComponent, SubcategoriesComponent, MainComponent, MaterialsComponent, MaterialFormComponent, MaterialvendorsComponent, MaterialvendorFormComponent, MaterialseasonsComponent, SeasonFromComponent],
  imports: [
    CommonModule,
    SharedModule,
    CustomTablesModule,
    DialogsModule,
    CustomFormsModule,
    //store for feature
    StoreModule.forFeature(materialseason.materialseasonFeatureKey, materialseason.reducer),
    StoreModule.forFeature(materialvendor.materialvendorFeatureKey, materialvendor.reducer),
    StoreModule.forFeature(material.materialFeatureKey, material.reducer),
    StoreModule.forFeature(subcategory.subcategoryFeatureKey, subcategory.reducer),
    StoreModule.forFeature(categorytype.categorytypeFeatureKey, categorytype.reducer),
    StoreModule.forFeature(category.categoryFeatureKey, category.reducer),
    StoreModule.forFeature(uom.uomFeatureKey, uom.reducer),
    StoreModule.forFeature(vendor.vendorFeatureKey, vendor.reducer),
    StoreModule.forFeature(currency.currencyFeatureKey, currency.reducer),
    StoreModule.forFeature(season.seasonFeatureKey, season.reducer),
    EffectsModule.forFeature([category.CategoryEffects, categorytype.CategorytypeEffects, subcategory.SubcategoryEffects, material.MaterialEffects,uom.UomEffects, materialvendor.MaterialvendorEffects,vendor.VendorEffects,currency.CurrencyEffects,season.SeasonEffects, materialseason.MaterialseasonEffects]),
    RouterModule.forChild([
      {path: '', pathMatch: 'full', redirectTo: 'materials'},
      {path: 'materialseasons', component: MaterialseasonsComponent},
      {path: 'materialvendors', component: MaterialvendorsComponent},
      {path: 'materials', component: MaterialsComponent},
      {path: 'sub-categories', component: SubcategoriesComponent},
      {path: 'category-types', component: CategorytypesComponent},
      {path: 'categories', component: CategoriesComponent},
      {path: 'main', component: MainComponent},
  
    ])
  ],
  entryComponents: [MaterialFormComponent,MaterialvendorFormComponent,SeasonFromComponent]
})
export class MerchandiseModule {}
