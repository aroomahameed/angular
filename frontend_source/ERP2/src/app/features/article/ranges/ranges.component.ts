import { selectCurrentRange,selectAllRanges, Range } from './../../store/article/range';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';

@Component({
  selector: 'smart-ranges',
  templateUrl: './ranges.component.html',
  styles: []
})
export class RangesComponent implements OnInit {

  form: RowData[] = [
    {
      row: [
        { label: 'Range Name', name: 'name', validator: Validators.required },
  
      ]
    },
    {
      row: [
      
        { label: 'Remarks', name: 'remarks', validator: Validators.required },
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
  items: Observable<Range[]>
  columns: TableData[] = [
    {title:'Range Name', value:'name'},
    {title:'Remarks', value:'remarks'},
    {title:'Status', value:'status', bool:true},
  ]

  selectAllSelector = selectAllRanges
  selectCurrent = selectCurrentRange
  constructor() { }

  ngOnInit() {

  }

}
