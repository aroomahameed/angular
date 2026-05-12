import { selectCurrentLine,selectAllLines, Line } from './../../store/warehouse/line';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';

@Component({
  selector: 'smart-lines',
  templateUrl: './lines.component.html',
  styles: []
})
export class LinesComponent implements OnInit {

  form: RowData[] = [
    {
      row: [
        { label: 'Line Name', name: 'name', validator: Validators.required },
     
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
  items: Observable<Line[]>
  columns: TableData[] = [
    {title:'Line Name', value:'name'},
   
    {title:'Status', value:'status', bool:true},
  ]

  selectAllSelector = selectAllLines
  selectCurrent = selectCurrentLine
  constructor() { }

  ngOnInit() {

  }

}
