import { selectCurrentSeason,selectAllSeasons, Season } from './../../store/article/season';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';

@Component({
  selector: 'smart-seasons',
  templateUrl: './seasons.component.html',
  styles: []
})
export class SeasonsComponent implements OnInit {

  form: RowData[] = [
    {
      row: [
        { label: 'Season Name', name: 'name', validator: Validators.required },
  
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
  items: Observable<Season[]>
  columns: TableData[] = [
    {title:'Season Name', value:'name'},
    {title:'Remarks', value:'remarks'},
    {title:'Status', value:'status', bool:true},
  ]

  selectAllSelector = selectAllSeasons
  selectCurrent = selectCurrentSeason
  constructor() { }

  ngOnInit() {

  }

}
