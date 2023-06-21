import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { CustomTablesModule } from '../../shared/custom-tables/custom-tables.module';
import { DialogsModule } from '../../shared/dialogs/dialogs.module';
import { CustomFormsModule } from '../../shared/forms/forms.module';
//component imports
import { ServiceidentifiersComponent } from './serviceidentifiers/serviceidentifiers.component'
import { CustomerlabelingdatasComponent } from './customerlabelingdatas/customerlabelingdatas.component'
import { CustomerexportdatasComponent } from './customerexportdatas/customerexportdatas.component'
import { ForwardersComponent } from './forwarders/forwarders.component'
import { CustomeraccdatasComponent } from './customeraccdatas/customeraccdatas.component'
import { CustomersComponent } from './customers/customers.component'
import { CustomeraccgroupsComponent } from './customeraccgroups/customeraccgroups.component'
import { ClientsComponent } from './clients/clients.component'

//store imports
import * as serviceidentifier from 'src/app/features/store/customer/serviceidentifier'
import * as customerlabelingdata from 'src/app/features/store/customer/customerlabelingdata'
import * as customerexportdata from 'src/app/features/store/customer/customerexportdata'
import * as forwarder from 'src/app/features/store/customer/forwarder'
import * as customeraccdata from 'src/app/features/store/customer/customeraccdata'
import * as customer from 'src/app/features/store/customer/customer'
import * as customeraccgroup from 'src/app/features/store/customer/customeraccgroup'
import * as client from 'src/app/features/store/customer/client'
import * as region from 'src/app/features/store/settings/region'
import * as country from 'src/app/features/store/settings/country'
import * as paymentterm from 'src/app/features/store/settings/paymentterm'
import * as currency from '../store/settings/currency';


import { SharedModule } from 'src/app/shared/shared.module';
import { IdenifirerFormComponent } from './serviceidentifiers/idenifirer-form/idenifirer-form.component';

@NgModule({
  declarations: [ ClientsComponent, CustomeraccgroupsComponent, CustomersComponent, CustomeraccdatasComponent, ForwardersComponent, CustomerexportdatasComponent, CustomerlabelingdatasComponent, ServiceidentifiersComponent, IdenifirerFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    CustomTablesModule,
    DialogsModule,
    CustomFormsModule,
    //store for feature
    StoreModule.forFeature(serviceidentifier.serviceidentifierFeatureKey, serviceidentifier.reducer),
    StoreModule.forFeature(customerlabelingdata.customerlabelingdataFeatureKey, customerlabelingdata.reducer),
    StoreModule.forFeature(customerexportdata.customerexportdataFeatureKey, customerexportdata.reducer),
    StoreModule.forFeature(forwarder.forwarderFeatureKey, forwarder.reducer),
    StoreModule.forFeature(customeraccdata.customeraccdataFeatureKey, customeraccdata.reducer),
    StoreModule.forFeature(customer.customerFeatureKey, customer.reducer),
    StoreModule.forFeature(customeraccgroup.customeraccgroupFeatureKey, customeraccgroup.reducer),
    StoreModule.forFeature(client.clientFeatureKey, client.reducer),
    StoreModule.forFeature(region.regionFeatureKey, region.reducer),
    StoreModule.forFeature(country.countryFeatureKey, country.reducer),
    StoreModule.forFeature(paymentterm.paymenttermFeatureKey, paymentterm.reducer),
    StoreModule.forFeature(currency.currencyFeatureKey, currency.reducer),
    EffectsModule.forFeature([ client.ClientEffects, customeraccgroup.CustomeraccgroupEffects, customer.CustomerEffects,region.RegionEffects,country.CountryEffects, customeraccdata.CustomeraccdataEffects,currency.CurrencyEffects,paymentterm.PaymenttermEffects, forwarder.ForwarderEffects, customerexportdata.CustomerexportdataEffects, customerlabelingdata.CustomerlabelingdataEffects, serviceidentifier.ServiceidentifierEffects]),
    RouterModule.forChild([
      {path: '', redirectTo:'', pathMatch: 'full'},
      {path: 'serviceidentifiers', component: ServiceidentifiersComponent},
      {path: 'customerlabelingdatas', component: CustomerlabelingdatasComponent},
      {path: 'customerexportdatas', component: CustomerexportdatasComponent},
      {path: 'forwarders', component: ForwardersComponent},
      {path: 'customeraccdatas', component: CustomeraccdatasComponent},
      {path: 'customers', component: CustomersComponent},
      {path: 'customeraccgroups', component: CustomeraccgroupsComponent},
      {path: 'clients', component: ClientsComponent},

    ])
    
  ],
  entryComponents: [IdenifirerFormComponent]
})
export class CustomerModule { }
