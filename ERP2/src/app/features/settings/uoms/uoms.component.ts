import { selectCurrentUom,selectAllUoms, Uom } from './../../store/settings/uom';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';

@Component({
  selector: 'smart-uoms',
  templateUrl: './uoms.component.html',
  styles: []
})
export class UomsComponent implements OnInit {

  form: RowData[] = [
    {
      row: [
        { label: 'Uom Name', name: 'name', validator: Validators.required },
    
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
  items: Observable<Uom[]>
  columns: TableData[] = [
    {title:'Uom Name', value:'name'},
    {title:'Code', value:'code'},
    {title:'Status', value:'status', bool:true},
  ]

  selectAllSelector = selectAllUoms
  selectCurrent = selectCurrentUom
  constructor() { }

  ngOnInit() {

  }

}
