import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { CustomTablesModule } from '../../shared/custom-tables/custom-tables.module';
import { DialogsModule } from '../../shared/dialogs/dialogs.module';
import { CustomFormsModule } from '../../shared/forms/forms.module';
//store imports
import * as company from 'src/app/features/store/settings/company'
import * as vendor from 'src/app/features/store/settings/vendor'
import * as vendorgroup from 'src/app/features/store/settings/vendorgroup'
import * as department from 'src/app/features/store/settings/department'
import * as paymentterm from 'src/app/features/store/settings/paymentterm'
import * as factorycode from 'src/app/features/store/settings/factorycode'
import * as region from 'src/app/features/store/settings/region'
import * as uom from 'src/app/features/store/settings/uom'
import * as country from 'src/app/features/store/settings/country'
import * as currency from '../store/settings/currency';
//component imports
import { CompanysComponent } from './companys/companys.component'
import { VendorsComponent } from './vendors/vendors.component'
import { VendorgroupsComponent } from './vendorgroups/vendorgroups.component'
import { DepartmentsComponent } from './departments/departments.component'
import { PaymenttermsComponent } from './paymentterms/paymentterms.component'
import { FactorycodesComponent } from './factorycodes/factorycodes.component'
import { RegionsComponent } from './regions/regions.component'
import { UomsComponent } from './uoms/uoms.component'
import { CountriesComponent } from './countries/countries.component'
import { CurrenciesComponent } from './currencies/currencies.component';
import { CompanyFormComponent } from './companys/company-form/company-form.component';

@NgModule({
  declarations: [CurrenciesComponent, CountriesComponent, UomsComponent, RegionsComponent, FactorycodesComponent, PaymenttermsComponent, DepartmentsComponent, VendorgroupsComponent, VendorsComponent, CompanysComponent, CompanyFormComponent],
  imports: [
    CommonModule,
    AlertModule,
    SharedModule,
    UiModule,
    CustomTablesModule,
    DialogsModule,
    CustomFormsModule,
    //store for feature
    StoreModule.forFeature(company.companyFeatureKey, company.reducer),
    StoreModule.forFeature(vendor.vendorFeatureKey, vendor.reducer),
    StoreModule.forFeature(vendorgroup.vendorgroupFeatureKey, vendorgroup.reducer),
    StoreModule.forFeature(department.departmentFeatureKey, department.reducer),
    StoreModule.forFeature(paymentterm.paymenttermFeatureKey, paymentterm.reducer),
    StoreModule.forFeature(factorycode.factorycodeFeatureKey, factorycode.reducer),
    StoreModule.forFeature(region.regionFeatureKey, region.reducer),
    StoreModule.forFeature(uom.uomFeatureKey, uom.reducer),
    StoreModule.forFeature(country.countryFeatureKey, country.reducer),
    StoreModule.forFeature(currency.currencyFeatureKey, currency.reducer),
    EffectsModule.forFeature([currency.CurrencyEffects, country.CountryEffects, uom.UomEffects, region.RegionEffects, factorycode.FactorycodeEffects, paymentterm.PaymenttermEffects, department.DepartmentEffects, vendorgroup.VendorgroupEffects, vendor.VendorEffects, company.CompanyEffects]),
    RouterModule.forChild([
      {path: '', pathMatch: 'full', redirectTo: 'countries'},
      {path: 'companys', component: CompanysComponent},
      {path: 'vendors', component: VendorsComponent},
      {path: 'vendorgroups', component: VendorgroupsComponent},
      {path: 'departments', component: DepartmentsComponent},
      {path: 'paymentterms', component: PaymenttermsComponent},
      {path: 'factorycodes', component: FactorycodesComponent},
      {path: 'regions', component: RegionsComponent},
      {path: 'uoms', component: UomsComponent},
      {path: 'countries', component: CountriesComponent},
      {path: 'currencies', component: CurrenciesComponent, data: { breadcrumbs: ['Settings', 'Currencies'] }},
    ])
  ],
  entryComponents: [CompanyFormComponent]
})
export class SettingsModule { }
