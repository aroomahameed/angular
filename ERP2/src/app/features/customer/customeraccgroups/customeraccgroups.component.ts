import { selectCurrentCustomeraccgroup,selectAllCustomeraccgroups, Customeraccgroup } from './../../store/customer/customeraccgroup';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';

@Component({
  selector: 'smart-customeraccgroups',
  templateUrl: './customeraccgroups.component.html',
  styles: []
})
export class CustomeraccgroupsComponent implements OnInit {

  form: RowData[] = [
    {
      row: [
        { label: 'Customer Account Group Name', name: 'name', validator: Validators.required },
  
      ]
    },
     {
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
  items: Observable<Customeraccgroup[]>
  columns: TableData[] = [
    {title:'Customer Account Group Name', value:'name'},
  
    {title:'Status', value:'status', bool:true},
  ]

  selectAllSelector = selectAllCustomeraccgroups
  selectCurrent = selectCurrentCustomeraccgroup
  constructor() { }

  ngOnInit() {

  }

}
