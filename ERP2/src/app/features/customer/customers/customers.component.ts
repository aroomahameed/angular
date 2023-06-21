import { selectCurrentCustomer, selectAllCustomers, Customer } from './../../store/customer/customer';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Client } from '../../store/customer/client/client';
import { Country } from '../../store/settings/country/country';
import { Region } from '../../store/settings/region/region';
import { Store } from '@ngrx/store';
import { loadClients, selectAllClients } from '../../store/customer/client';
import { loadCountries, selectAllCountries } from '../../store/settings/country';
import { loadRegions, selectAllRegions } from '../../store/settings/region';
@Component({
  selector: 'smart-customers',
  templateUrl: './customers.component.html',
  styles: []
})
export class CustomersComponent implements OnInit {

  client: Observable<Client[]>
  country: Observable<Country[]>
  region: Observable<Region[]>
  selectAllSelector = selectAllCustomers
  selectCurrent = selectCurrentCustomer
  constructor(private store: Store<any>) { }
  form: RowData[] = []
  columns: TableData[] = [
    { title: 'Customer Name', value: 'name' },
    { title: 'Client', value: ['client', 'name'], sortable:true },
    { title: 'Code', value: 'code' },
    { title: 'Country', value: ['country', 'name'], sortable:true },
    { title: 'Status', value: 'status', bool: true },
  ]
  ngOnInit() {
    this.store.dispatch(loadClients())
    this.client = this.store.select(selectAllClients)
    this.store.dispatch(loadCountries())
    this.country = this.store.select(selectAllCountries)
    this.store.dispatch(loadRegions())
    this.region = this.store.select(selectAllRegions)
    this.form = [
      {
        row: [
          { label: 'Customer Name', name: 'name', validator: Validators.required },
          { label: 'Client Name', name: 'client', items: this.client, validator: Validators.required, type: 'select' },
        ]
      },
      {
        row: [

          { label: 'Code', name: 'code', validator: Validators.required },
          { label: 'Full Name', name: 'full_name', validator: Validators.required },
        ]
      },
      {
        row: [
          { label: 'Email', name: 'email', validator: Validators.email, type: "email" },
          { label: 'Address', name: 'address', validator: Validators.required },
          { label: 'City', name: 'city' },
        ]
      }
      ,
      {
        row: [
          { label: 'Phone', name: 'phone' },
          { label: 'Mobile', name: 'mobile' },
          { label: 'Fax', name: 'fax' },

        ]
      },
      {
        row: [
          { label: 'Region', name: 'region', items: this.region, validator: Validators.required, type: "select" },
          { label: 'Country', name: 'country', items: this.country, validator: Validators.required, type: 'select' },

        ]
      },
      {
        row: [
          { label: 'Min Order', name: 'min_order' },
          { label: 'Lead Time', name: 'lead_time' },

        ]
      },
      {
        row: [
          { label: 'Customized Field 1', name: 'customized_field1' },
          { label: 'Customized Field 1', name: 'customized_field2' },

        ]
      },
      {
        row: [
          { label: 'Contact Person', name: 'contact_person' },
          { label: 'Contact Person Title', name: 'contact_person_title' },
          { label: 'Contact Person Department', name: 'contact_person_department' },
      
         
        ]
      },
      {
        row: [
          { label: 'Contact Person Phone', name: 'contact_person_phone' },
          { label: 'Contact Person Email', name: 'contact_person_email',validator: Validators.email, type: "email"  },
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
