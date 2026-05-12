import { selectCurrentCustomeraccdata, selectAllCustomeraccdatas, Customeraccdata } from './../../store/customer/customeraccdata';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Customeraccgroup } from '../../store/customer/customeraccgroup/customeraccgroup';
import { Currency } from '../../store/settings/currency/currency';
import { Paymentterm } from '../../store/settings/paymentterm/paymentterm';
import { Customer } from '../../store/customer/customer/customer';
import { Store } from '@ngrx/store';
import { loadCustomeraccgroups, selectAllCustomeraccgroups } from '../../store/customer/customeraccgroup';
import { loadCurrencies, selectAllCurrencies } from '../../store/settings/currency';
import { loadPaymentterms, selectAllPaymentterms } from '../../store/settings/paymentterm';
import { loadCustomers, selectAllCustomers } from '../../store/customer/customer';
@Component({
  selector: 'smart-customeraccdatas',
  templateUrl: './customeraccdatas.component.html',
  styles: []
})
export class CustomeraccdatasComponent implements OnInit {
  customeraccgroup: Observable<Customeraccgroup[]>
  currency: Observable<Currency[]>
  paymenterm: Observable<Paymentterm[]>
  customer: Observable<Customer[]>
  selectAllSelector = selectAllCustomeraccdatas
  selectCurrent = selectCurrentCustomeraccdata
  constructor(private store: Store<any>) { }
  form: RowData[] = []
  columns: TableData[] = [
    { title: 'Customer', value: ['customer','name'] },
    { title: 'Code', value: 'code' },
    { title: 'Account Group ', value: ['acc_group','name'] },
    { title: 'Bank Name', value: 'bank_name' },
    { title: 'Status', value: 'status', bool: true },
  ]
  ngOnInit() {
    this.store.dispatch(loadCustomeraccgroups())
    this.customeraccgroup = this.store.select(selectAllCustomeraccgroups)
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
          { label: 'Currency', name: 'currency', items: this.currency, validator: Validators.required, type: 'select' },
        ]
      },
      {
        row: [

          { label: 'Code', name: 'code', validator: Validators.required },
          { label: 'Account Group', name: 'acc_group', items: this.customeraccgroup, validator: Validators.required, type: 'select' },
        ]
      },
      {
        row: [

          { label: 'Bank Name', name: 'bank_name' },
          { label: 'Bank Account No', name: 'bank_account_no' },
          { label: 'Bank Account Name', name: 'bank_account_name' },
        ]
      },
      {
        row: [
          { label: 'NTN', name: 'ntn_no' },
          { label: 'VAT', name: 'vat_no' },
          { label: 'GST', name: 'gst_no' },
        ]
      },

      {
        row: [
          { label: 'Bank Swift Code', name: 'bank_swift_code' },
          { label: 'Bank IBA', name: 'bank_iba' },
          { label: 'Credit Limit', name: 'credit_limit' },
        ]
      },

      {
        row: [
          { label: 'Payment Term', name: 'payment_term', items: this.paymenterm, validator: Validators.required, type: "select" },
          { label: 'Payment Tolerance', name: 'payment_tolerance' },
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
