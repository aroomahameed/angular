import { selectCurrentDelayreasoncode,selectAllDelayreasoncodes, Delayreasoncode } from './../../store/productionorder/delayreasoncode';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';

@Component({
  selector: 'smart-delayreasoncodes',
  templateUrl: './delayreasoncodes.component.html',
  styles: []
})
export class DelayreasoncodesComponent implements OnInit {

  form: RowData[] = [
   
    {
      row: [
      
        { label: 'Code', name: 'code', validator: Validators.required },
      ]
    },
    {
      row: [
      
        { label: 'Category', name: 'category', validator: Validators.required },
      ]
    },
    {
      row: [
      
        { label: 'Detail', name: 'detail', validator: Validators.required },
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
  items: Observable<Delayreasoncode[]>
  columns: TableData[] = [
   
    {title:'Code', value:'code'},
    {title:'Category', value:'category'},
    {title:'Status', value:'status', bool:true},
  ]

  selectAllSelector = selectAllDelayreasoncodes
  selectCurrent = selectCurrentDelayreasoncode
  constructor() { }

  ngOnInit() {

  }

}
