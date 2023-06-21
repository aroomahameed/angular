import { selectCurrentTest,selectAllTests, Test } from './../../store/fit/test';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable,of } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'smart-tests',
  templateUrl: './tests.component.html',
  styles: []
})
export class TestsComponent implements OnInit {
  types = of([{ id: 'B', name: 'Ball' }, { id: 'M', name: 'Material' }])
  form: RowData[] = [
    {
      row: [
        { label: 'Test Name', name: 'name', validator: Validators.required },
  
      ]
    },
    {
      row: [
      
        { label: 'Code', name: 'code', validator: Validators.required },
      ]
    },
    {
      row: [
      
        { label: 'Type', name: 'type', items: this.types , validator: Validators.required , type:'select'},
      ]
    },
    {
      row: [
      
        { label: 'Method', name: 'method', validator: Validators.required },
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
  items: Observable<Test[]>
  columns: TableData[] = [
    {title:'Test Name', value:'name'},
    {title:'Code', value:'code'},
    {title:'Status', value:'status', bool:true},
  ]

  selectAllSelector = selectAllTests
  selectCurrent = selectCurrentTest
  constructor(private store: Store<any>) { }

  ngOnInit() {

  }

}
