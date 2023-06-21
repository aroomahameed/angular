import { selectCurrentRegion,selectAllRegions, Region } from './../../store/settings/region';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';

@Component({
  selector: 'smart-regions',
  templateUrl: './regions.component.html',
  styles: []
})
export class RegionsComponent implements OnInit {

  form: RowData[] = [
    {
      row: [
        { label: 'Region Name', name: 'name', validator: Validators.required },
      ],
    },{
      row: [
        { label: 'Code', name: 'code', validator: Validators.required },
      ]
    }
    , {
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
  items: Observable<Region[]>
  columns: TableData[] = [
    {title:'Region Name', value:'name'},
    {title:'Code', value:'code'},
    {title:'Status', value:'status', bool:true},
  ]

  selectAllSelector = selectAllRegions
  selectCurrent = selectCurrentRegion
  constructor() { }

  ngOnInit() {

  }

}
