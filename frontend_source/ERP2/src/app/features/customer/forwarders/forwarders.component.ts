import { selectCurrentForwarder,selectAllForwarders, Forwarder } from './../../store/customer/forwarder';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Country } from '../../store/settings/country/country';
import { Paymentterm } from '../../store/settings/paymentterm/paymentterm';
import { Store } from '@ngrx/store';
import { loadCountries, selectAllCountries } from '../../store/settings/country';
import { loadPaymentterms, selectAllPaymentterms } from '../../store/settings/paymentterm';
@Component({
  selector: 'smart-forwarders',
  templateUrl: './forwarders.component.html',
  styles: []
})
export class ForwardersComponent implements OnInit {
  country: Observable<Country[]>
  paymenterm: Observable<Paymentterm[]>
  options = of([{id: 'air', name: 'Air'}, {id: 'sea', name: 'Sea'}])
  selectAllSelector = selectAllForwarders
  selectCurrent = selectCurrentForwarder
  constructor(private store: Store<any>) { }
  form: RowData[] = []
  columns: TableData[] = [

    { title: 'Name', value: 'name' },
    { title: 'Address', value: 'address' },
    { title: 'Country', value: ['country','name'] },
    { title: 'Status', value: 'status', bool: true },
  ]
  ngOnInit() {
    this.store.dispatch(loadCountries())
    this.country = this.store.select(selectAllCountries)
    this.store.dispatch(loadPaymentterms())
    this.paymenterm = this.store.select(selectAllPaymentterms)
  
    this.form = [
      {
        row: [
          { label: 'Forwarder Name', name: 'name', validator: Validators.required,  },
          { label: 'Address', name: 'address',  validator: Validators.required, },
        ]
      },
      {
        row: [

          { label: 'Country', name: 'country', items: this.country, validator: Validators.required, type: 'select' },
          { label: 'Type', name: 'type', items: this.options, validator: Validators.required, type: 'select' },
        ]
      },
      {
        row: [

          { label: 'Phone', name: 'phone' },
          { label: 'Email', name: 'email',validator: Validators.email},
        ]
      },
      {
        row: [
          { label: 'NTN', name: 'ntn' },
          { label: 'VAT', name: 'vat' },
          { label: 'GST', name: 'gst' },
        ]
      },

      {
        row: [
          { label: 'Contact Person', name: 'contact_person',validator:Validators.required },
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
