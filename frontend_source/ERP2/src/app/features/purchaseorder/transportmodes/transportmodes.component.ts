import { selectCurrentTransportmode,selectAllTransportmodes, Transportmode } from './../../store/purchaseorder/transportmode';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';

@Component({
  selector: 'smart-transportmodes',
  templateUrl: './transportmodes.component.html',
  styles: []
})
export class TransportmodesComponent implements OnInit {

  form: RowData[] = [
    {
      row: [
        { label: 'Transport Mode Name', name: 'name', validator: Validators.required },
  
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
  items: Observable<Transportmode[]>
  columns: TableData[] = [
    {title:'Transport Mode Name', value:'name'},
    {title:'Code', value:'code'},
    {title:'Status', value:'status', bool:true},
  ]

  selectAllSelector = selectAllTransportmodes
  selectCurrent = selectCurrentTransportmode
  constructor() { }

  ngOnInit() {

  }

}
