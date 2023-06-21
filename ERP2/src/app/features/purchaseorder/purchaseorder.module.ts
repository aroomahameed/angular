import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { CustomTablesModule } from '../../shared/custom-tables/custom-tables.module';
import { DialogsModule } from '../../shared/dialogs/dialogs.module';
import { CustomFormsModule } from '../../shared/forms/forms.module';
//component imports
import { PurchaseorderitemsComponent } from './purchaseorderitems/purchaseorderitems.component'
import { PurchaseordersComponent } from './purchaseorders/purchaseorders.component'
import { QuotationitemsComponent } from './quotationitems/quotationitems.component'
import { QuotationsComponent } from './quotations/quotations.component'
import { TransportmodesComponent } from './transportmodes/transportmodes.component'
import { PootherchargesComponent } from './poothercharges/poothercharges.component'
import { TaxesComponent } from './taxes/taxes.component'


//store imports
import * as purchaseorderitem from 'src/app/features/store/purchaseorder/purchaseorderitem'
import * as purchaseorder from 'src/app/features/store/purchaseorder/purchaseorder'
import * as quotationitem from 'src/app/features/store/purchaseorder/quotationitem'
import * as quotation from 'src/app/features/store/purchaseorder/quotation'
import * as transportmode from 'src/app/features/store/purchaseorder/transportmode'
import * as poothercharge from 'src/app/features/store/purchaseorder/poothercharge'
import * as tax from 'src/app/features/store/purchaseorder/tax'
import * as paymentterm from 'src/app/features/store/settings/paymentterm'
import * as vendor from 'src/app/features/store/settings/vendor'
import * as material from 'src/app/features/store/merchandise/material'
import * as uom from 'src/app/features/store/settings/uom'
import { SharedModule } from 'src/app/shared/shared.module';
import { QuotationFormComponent } from './quotations/quotation-form/quotation-form.component';
import { PoFormComponent } from './purchaseorders/po-form/po-form.component';

@NgModule({
  declarations: [TaxesComponent, PootherchargesComponent, TransportmodesComponent, QuotationsComponent, QuotationitemsComponent, QuotationFormComponent, PurchaseordersComponent, PoFormComponent, PurchaseorderitemsComponent],
  imports: [
    CommonModule,
    SharedModule,
    CustomTablesModule,
    DialogsModule,
    CustomFormsModule,
    //store for feature
    StoreModule.forFeature(purchaseorderitem.purchaseorderitemFeatureKey, purchaseorderitem.reducer),
    StoreModule.forFeature(purchaseorder.purchaseorderFeatureKey, purchaseorder.reducer),
    StoreModule.forFeature(quotationitem.quotationitemFeatureKey, quotationitem.reducer),
    StoreModule.forFeature(quotation.quotationFeatureKey, quotation.reducer),
    StoreModule.forFeature(transportmode.transportmodeFeatureKey, transportmode.reducer),
    StoreModule.forFeature(poothercharge.pootherchargeFeatureKey, poothercharge.reducer),
    StoreModule.forFeature(tax.taxFeatureKey, tax.reducer),
    StoreModule.forFeature(vendor.vendorFeatureKey, vendor.reducer),
    StoreModule.forFeature(paymentterm.paymenttermFeatureKey, paymentterm.reducer),
    StoreModule.forFeature(material.materialFeatureKey, material.reducer),
    StoreModule.forFeature(uom.uomFeatureKey, uom.reducer),
    EffectsModule.forFeature([tax.TaxEffects, poothercharge.PootherchargeEffects, transportmode.TransportmodeEffects, quotation.QuotationEffects,vendor.VendorEffects,paymentterm.PaymenttermEffects, quotationitem.QuotationitemEffects,material.MaterialEffects,uom.UomEffects, purchaseorder.PurchaseorderEffects, purchaseorderitem.PurchaseorderitemEffects]),
    RouterModule.forChild([
      {path: '', redirectTo:'taxes', pathMatch: 'full'},
      {path: 'purchaseorderitems', component: PurchaseorderitemsComponent},
      {path: 'purchaseorders', component: PurchaseordersComponent},
      {path: 'quotationitems', component: QuotationitemsComponent},
      {path: 'quotations', component: QuotationsComponent},
      {path: 'transportmodes', component: TransportmodesComponent},
      {path: 'poothercharges', component: PootherchargesComponent},
      {path: 'taxes', component: TaxesComponent},

      
    ])
  ],
  entryComponents: [QuotationFormComponent,PoFormComponent]
})
export class PurchaseorderModule { }
