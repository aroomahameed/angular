import { selectCurrentCurrency,selectAllCurrencies, Currency } from './../../store/settings/currency';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';

@Component({
  selector: 'smart-currencies',
  templateUrl: './currencies.component.html',
  styles: []
})
export class CurrenciesComponent implements OnInit {

  form: RowData[] = [
    {
      row: [
        { label: 'Currency Name', name: 'name', validator: Validators.required },
  
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
  items: Observable<Currency[]>
  columns: TableData[] = [
    {title:'Currency Name', value:'name'},
    {title:'Code', value:'code'},
    {title:'Status', value:'status', bool:true},
  ]

  selectAllSelector = selectAllCurrencies
  selectCurrent = selectCurrentCurrency
  constructor() { }

  ngOnInit() {

  }

}
