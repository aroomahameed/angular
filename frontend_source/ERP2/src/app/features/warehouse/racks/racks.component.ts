import { selectCurrentRack,selectAllRacks, Rack } from './../../store/warehouse/rack';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';

@Component({
  selector: 'smart-racks',
  templateUrl: './racks.component.html',
  styles: []
})
export class RacksComponent implements OnInit {

  form: RowData[] = [
    {
      row: [
        { label: 'Rack Name', name: 'name', validator: Validators.required },
      
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
  items: Observable<Rack[]>
  columns: TableData[] = [
    {title:'Rack Name', value:'name'},
   
    {title:'Status', value:'status', bool:true},
  ]

  selectAllSelector = selectAllRacks
  selectCurrent = selectCurrentRack
  constructor() { }

  ngOnInit() {

  }

}
