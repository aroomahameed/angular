import { selectCurrentPoothercharge,selectAllPoothercharges, Poothercharge } from './../../store/purchaseorder/poothercharge';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';

@Component({
  selector: 'smart-poothercharges',
  templateUrl: './poothercharges.component.html',
  styles: []
})
export class PootherchargesComponent implements OnInit {

  form: RowData[] = [
    {
      row: [
        { label: 'Po other charges', name: 'name', validator: Validators.required },
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
  items: Observable<Poothercharge[]>
  columns: TableData[] = [
    {title:'Po other charges', value:'name'},
    {title:'Status', value:'status', bool:true},
  ]

  selectAllSelector = selectAllPoothercharges
  selectCurrent = selectCurrentPoothercharge
  constructor() { }

  ngOnInit() {

  }

}
