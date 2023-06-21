import { selectCurrentFactorycode,selectAllFactorycodes, Factorycode } from './../../store/settings/factorycode';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';

@Component({
  selector: 'smart-factorycodes',
  templateUrl: './factorycodes.component.html',
  styles: []
})
export class FactorycodesComponent implements OnInit {

  form: RowData[] = [
    {
      row: [
        { label: 'Factory Code Name', name: 'name', validator: Validators.required },
     
      ]
    }, 
    {
      row: [
      
        { label: 'Code', name: 'code', validator: Validators.required },
      ]
    },{
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
  items: Observable<Factorycode[]>
  columns: TableData[] = [
    {title:'Factory Code Name', value:'name'},
    {title:'Code', value:'code'},
    {title:'Status', value:'status', bool:true},
  ]

  selectAllSelector = selectAllFactorycodes
  selectCurrent = selectCurrentFactorycode
  constructor() { }

  ngOnInit() {

  }

}
