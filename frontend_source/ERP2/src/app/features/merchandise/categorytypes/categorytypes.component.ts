import { selectCurrentCategorytype,selectAllCategorytypes, Categorytype } from './../../store/merchandise/categorytype';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';

@Component({
  selector: 'smart-categorytypes',
  templateUrl: './categorytypes.component.html',
  styles: []
})
export class CategorytypesComponent implements OnInit {

  form: RowData[] = [
    {
      row: [
        { label: 'Name', name: 'name', validator: Validators.required },
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
  items: Observable<Categorytype[]>
  columns: TableData[] = [
    {title:'Categorytyp Name', value:'name'},
    {title:'Status', value:'status', bool:true},
  ]

  selectAllSelector = selectAllCategorytypes
  selectCurrent = selectCurrentCategorytype
  constructor() { }

  ngOnInit() {

  }

}
