import { selectCurrentVendorgroup,selectAllVendorgroups, Vendorgroup } from './../../store/settings/vendorgroup';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';

@Component({
  selector: 'smart-vendorgroups',
  templateUrl: './vendorgroups.component.html',
  styles: []
})
export class VendorgroupsComponent implements OnInit {

  form: RowData[] = [
    {
      row: [
        { label: 'Vendor Group Name', name: 'name', validator: Validators.required },
  
      ]
    },
    {
      row: [
      
        { label: 'Code', name: 'code', validator: Validators.required },
      ]
    }, {
      row: [
        { label: 'Status', name: 'status', type:'check' }
      ]
    }
    , {
      row: [
        { label: 'ID', name: 'id', type:'hidden' }
      ]
    }
  ]
  items: Observable<Vendorgroup[]>
  columns: TableData[] = [
    {title:'Vendor Group Name', value:'name'},
    {title:'Code', value:'code'},
    {title:'Status', value:'status', bool:true},
  ]

  selectAllSelector = selectAllVendorgroups
  selectCurrent = selectCurrentVendorgroup
  constructor() { }

  ngOnInit() {

  }

}
