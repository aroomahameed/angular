import { selectCurrentCustomerexportdata,selectAllCustomerexportdatas, Customerexportdata } from './../../store/customer/customerexportdata';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Forwarder } from '../../store/customer/forwarder/forwarder';
import { Country } from '../../store/settings/country/country';
import { Customer } from '../../store/customer/customer/customer';
import { Store } from '@ngrx/store';
import { loadForwarders, selectAllForwarders } from '../../store/customer/forwarder';
import { loadCountries, selectAllCountries } from '../../store/settings/country';
import { loadCustomers, selectAllCustomers } from '../../store/customer/customer';
@Component({
  selector: 'smart-customerexportdatas',
  templateUrl: './customerexportdatas.component.html',
  styles: []
})
export class CustomerexportdatasComponent implements OnInit {
  forwarder: Observable<Forwarder[]>
  country: Observable<Country[]>
  customer: Observable<Customer[]>
  selectAllSelector = selectAllCustomerexportdatas
  selectCurrent = selectCurrentCustomerexportdata
  constructor(private store: Store<any>) { }
  form: RowData[] = []
  columns: TableData[] = [
    { title: 'Customer', value: ['customer','name'] },
    { title: 'Country', value: ['exp_country','name'] },
    { title: 'Delivery To', value: 'deliveryTo' },
    { title: 'Carton', value: 'carton_option', bool: true },
    { title: 'Is Damco', value: 'is_damco', bool: true },
    { title: 'Status', value: 'status', bool: true },
  ]
  ngOnInit() {
    this.store.dispatch(loadForwarders())
    this.forwarder = this.store.select(selectAllForwarders)
    this.store.dispatch(loadCountries())
    this.country = this.store.select(selectAllCountries)
    this.store.dispatch(loadCustomers())
    this.customer = this.store.select(selectAllCustomers)
    this.form = [
      {
        row: [
          { label: 'Customer', name: 'customer', items: this.customer, validator: Validators.required, type: 'select' },
          { label: 'Country', name: 'exp_country', items: this.country, validator: Validators.required, type: 'select' },
        ]
      },
      {
        row: [

          { label: 'Delivery To', name: 'deliveryTo', validator: Validators.required },
          { label: 'Sea Port', name: 'sea_port', validator: Validators.required},
          { label: 'Air Port', name: 'air_port', validator: Validators.required},
        ]
      },
      {
        row: [

          { label: 'Sea Consignee 1', name: 'sea_consignee'},
          { label: 'Sea Consignee 2', name: 'sea_consignee1'},
          { label: 'Sea Notify Party 1', name: 'sea_notify_party' },
          { label: 'sea_notify_party 2', name: 'sea_notify_party1' },
         
        ]
      },
    {
      row: [

        { label: 'Air Consignee 1', name: 'air_consignee' },
        { label: 'Air Consignee 2', name: 'air_consignee1'},
        { label: 'Air Notify Party 1', name: 'air_notify_party'},
        { label: 'Air Notify Party 2', name: 'air_notify_party1'},
       
      ]
    },
      {
        row: [
          { label: 'GSP Sea Consignee', name: 'gsp_sea_consignee' },
          { label: 'GSP Air Consignee', name: 'gsp_air_consignee' },
          { label: 'Beneficiary Consignee', name: 'beneficiary_consignee' },
        ]
      },

      {
        row: [
          { label: 'Invoice To', name: 'invoice_to' },
          { label: 'Sea Notify', name: 'sea_notify' },
          { label: 'Air Notify', name: 'air_notify' },
        ]
      },

      {
        row: [
          { label: 'Sea Forwarder', name: 'sea_forwarder', items: this.forwarder, validator: Validators.required, type: "select" },
          { label: 'Air Forwarder', name: 'air_forwarder', items: this.forwarder, validator: Validators.required, type: "select" },
    
        ]
      },
      {
        row: [
          { label: 'Carton Option', name: 'carton_option', type: 'check' }
        ]
      }
      ,
      {
        row: [
          { label: 'Is Damco', name: 'is_damco', type: 'check' }
        ]
      }
      ,
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
