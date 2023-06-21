import { selectCurrentClient,selectAllClients, Client } from './../../store/customer/client';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';

@Component({
  selector: 'smart-clients',
  templateUrl: './clients.component.html',
  styles: []
})
export class ClientsComponent implements OnInit {

  form: RowData[] = [
    {
      row: [
        { label: 'Client Name', name: 'name', validator: Validators.required },
  
      ]
    },
    {
      row: [
      
        { label: 'Brand', name: 'brand', validator: Validators.required },
      ]
    }, {
      row: [
        { label: 'Is Adidas', name: 'is_adidas', type:'check' },
       
      ]
    }
    ,
     {
      row: [
      
        { label: 'Status', name: 'status', type:'check' },
      ]
    }
    , {
      row: [
        { label: 'ID', name: 'id', type:'hidden' }
      ]
    }
  ]
  items: Observable<Client[]>
  columns: TableData[] = [
    {title:'Client Name', value:'name'},
    {title:'Brand', value:'brand'},
    {title:'Is Adidas', value:'is_adidas', bool:true},
    {title:'Status', value:'status', bool:true},
  ]

  selectAllSelector = selectAllClients
  selectCurrent = selectCurrentClient
  constructor() { }

  ngOnInit() {

  }

}
