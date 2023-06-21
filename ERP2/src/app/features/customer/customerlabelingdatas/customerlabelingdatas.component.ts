import { selectCurrentCustomerlabelingdata,selectAllCustomerlabelingdatas, Customerlabelingdata } from './../../store/customer/customerlabelingdata';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Customeraccgroup } from '../../store/customer/customeraccgroup/customeraccgroup';
import { Currency } from '../../store/settings/currency/currency';
import { Country } from '../../store/settings/country/country';
import { Paymentterm } from '../../store/settings/paymentterm/paymentterm';
import { Customer } from '../../store/customer/customer/customer';
import { Store } from '@ngrx/store';
import { loadCustomeraccgroups, selectAllCustomeraccgroups } from '../../store/customer/customeraccgroup';
import { loadCountries, selectAllCountries } from '../../store/settings/country';
import { loadCurrencies, selectAllCurrencies } from '../../store/settings/currency';
import { loadPaymentterms, selectAllPaymentterms } from '../../store/settings/paymentterm';
import { loadCustomers, selectAllCustomers } from '../../store/customer/customer';
@Component({
  selector: 'smart-customerlabelingdatas',
  templateUrl: './customerlabelingdatas.component.html',
  styles: []
})
export class CustomerlabelingdatasComponent implements OnInit {
  customeraccgroup: Observable<Customeraccgroup[]>
  country: Observable<Country[]>
  currency: Observable<Currency[]>
  paymenterm: Observable<Paymentterm[]>
  customer: Observable<Customer[]>
  selectAllSelector = selectAllCustomerlabelingdatas
  selectCurrent = selectCurrentCustomerlabelingdata
  constructor(private store: Store<any>) { }
  form: RowData[] = []
  columns: TableData[] = [
    { title: 'Customer', value: ['customer','name'] },
    { title: 'WIE', value: 'wie_label' },
    { title: 'Polybag ', value: 'poly_bag'},
    { title: 'Status', value: 'status', bool: true },
  ]
  ngOnInit() {
    this.store.dispatch(loadCustomeraccgroups())
    this.customeraccgroup = this.store.select(selectAllCustomeraccgroups)
    this.store.dispatch(loadCountries())
    this.country = this.store.select(selectAllCountries)
    this.store.dispatch(loadCurrencies())
    this.currency = this.store.select(selectAllCurrencies)
    this.store.dispatch(loadPaymentterms())
    this.paymenterm = this.store.select(selectAllPaymentterms)
    this.store.dispatch(loadCustomers())
    this.customer = this.store.select(selectAllCustomers)
    this.form = [
      {
        row: [
          { label: 'Customer', name: 'customer', items: this.customer, validator: Validators.required, type: 'select' },
          { label: 'WIE', name: 'wie_label' },
        ]
      },
      {
        row: [
          { label: 'Polybag', name: 'poly_bag' },
          { label: 'Polybag Packing Type', name: 'poly_bag_packing_type' },
       
        ]
      },
      {
        row: [

          { label: 'Poly Bag Sticker', name: 'poly_bag_sticker' },
          { label: 'Additional Sticker', name: 'additional_sticker' },
         
        ]
      },
      {
        row: [
          { label: 'Packing Quantity', name: 'packing_quantity' },
          { label: 'Carton Size', name: 'carton_size' },
        
        ]
      },

      {
        row: [
          { label: 'Carton Additional Sticker', name: 'carton_additional_sticker' },
          { label: 'Any Other Special', name: 'any_other_special' },
        ]
      },

      {
        row: [
          { label: 'UCC Label', name: 'ucc_label' },
          { label: 'Customer Remarks', name: 'customer_remarks' },
        ]
      },
      {
        row: [
          { label: 'UCEAN Code', name: 'upcean_code' },
          { label: 'Labeling Remarks', name: 'labeling_remarks' },
        ]
      },
      {
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
