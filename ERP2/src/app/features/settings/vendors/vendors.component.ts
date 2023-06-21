import { selectCurrentVendor, selectAllVendors, Vendor } from './../../store/settings/vendor';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { select } from '@ngrx/store';
import { Vendorgroup } from '../../store/settings/vendorgroup/vendorgroup';
import { Currency } from '../../store/settings/currency/currency';
import { Country } from '../../store/settings/country/country';
import { Paymentterm } from '../../store/settings/paymentterm/paymentterm';
import { Region } from '../../store/settings/region/region';
import { Store } from '@ngrx/store';
import { loadVendorgroups, selectAllVendorgroups } from '../../store/settings/vendorgroup';
import { loadCountries, selectAllCountries } from '../../store/settings/country';
import { loadCurrencies, selectAllCurrencies } from '../../store/settings/currency';
import { loadPaymentterms, selectAllPaymentterms } from '../../store/settings/paymentterm';
import { loadRegions, selectAllRegions } from '../../store/settings/region';

@Component({
  selector: 'smart-vendors',
  templateUrl: './vendors.component.html',
  styles: []
})
export class VendorsComponent implements OnInit {
  vendorgroup: Observable<Vendorgroup[]>
  country: Observable<Country[]>
  currency: Observable<Currency[]>
  paymenterm: Observable<Paymentterm[]>
  region: Observable<Region[]>
  selectAllSelector = selectAllVendors
  selectCurrent = selectCurrentVendor
  constructor(private store: Store<any>) { }
  form: RowData[] = []
  columns: TableData[] = [
    { title: 'Vendor Name', value: 'name' },
    { title: 'Code', value: 'code' },
    { title: 'Status', value: 'status', bool: true },
  ]
  ngOnInit() {
    this.store.dispatch(loadVendorgroups())
    this.vendorgroup = this.store.select(selectAllVendorgroups)
    this.store.dispatch(loadCountries())
    this.country = this.store.select(selectAllCountries)
    this.store.dispatch(loadCurrencies())
    this.currency = this.store.select(selectAllCurrencies)
    this.store.dispatch(loadPaymentterms())
    this.paymenterm = this.store.select(selectAllPaymentterms)
    this.store.dispatch(loadRegions())
    this.region = this.store.select(selectAllRegions)
    this.form = [
      {
        row: [
          { label: 'Vendor Name', name: 'name', validator: Validators.required },
          { label: 'Vendor Grpup', name: 'vendor_group', items: this.vendorgroup, validator: Validators.required, type: 'select' },
        ]
      },
      {
        row: [

          { label: 'Code', name: 'code', validator: Validators.required },
          { label: 'Title', name: 'title', validator: Validators.required },
        ]
      },
      {
        row: [

          { label: 'Contact Person', name: 'contact_person', validator: Validators.required },
          { label: 'Address', name: 'address', validator: Validators.required },
        ]
      },
      {
        row: [

          { label: 'City', name: 'city', validator: Validators.required },
          { label: 'Country', name: 'country', items: this.country, validator: Validators.required, type: 'select' },

        ]
      },
      {
        row: [
          { label: 'Phone', name: 'phone' },
          { label: 'Mobile', name: 'mobile' },
          { label: 'Fax', name: 'fax' },
          
        ]
      },
      {
        row: [

          { label: 'Email', name: 'email', validator: Validators.required && Validators.email, type: "email" },
          { label: 'NTN', name: 'ntn' },
          { label: 'Sale Tax No', name: 'sale_tax_no' },

        ]
      },
      {
        row: [
          { label: 'Customer No', name: 'customer_no' },
          { label: 'Min Order', name: 'min_order', type: 'number', validator: Validators.required, },
          { label: 'Max Order', name: 'max_order', type: 'number', validator: Validators.required, },
        ]
      },
      {
        row: [
          { label: 'Payment Term', name: 'payment_term', items: this.paymenterm, validator: Validators.required, type: "select" },
          { label: 'Currency', name: 'currency', items: this.currency, validator: Validators.required, type: 'select' },
        ]
      },
      {
        row: [
          { label: 'Region', name: 'region', items: this.region, validator: Validators.required, type: "select" },
        ]
      }, {
        row: [
          { label: 'Status', name: 'status', type: 'check' }
        ]
      }
      , {
        row: [
          { label: 'ID', name: 'id', type: 'hidden' }
        ]
      }
    ]




  }


}
