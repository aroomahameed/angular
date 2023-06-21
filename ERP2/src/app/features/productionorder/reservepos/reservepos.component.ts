import { selectCurrentReservepo,selectAllReservepos, Reservepo } from './../../store/productionorder/reservepo';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';

@Component({
  selector: 'smart-reservepos',
  templateUrl: './reservepos.component.html',
  styles: []
})
export class ReserveposComponent implements OnInit {

  form: RowData[] = [
    {
      row: [
        { label: 'Reservepo Name', name: 'name', validator: Validators.required },
  
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
  items: Observable<Reservepo[]>
  columns: TableData[] = [
    {title:'Reservepo Name', value:'name'},
    {title:'Code', value:'code'},
    {title:'Status', value:'status', bool:true},
  ]

  selectAllSelector = selectAllReservepos
  selectCurrent = selectCurrentReservepo
  constructor() { }

  ngOnInit() {

  }

}
