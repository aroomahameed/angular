import { selectCurrentCountry,selectAllCountries, Country } from './../../store/settings/country';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';

@Component({
  selector: 'smart-countries',
  templateUrl: './countries.component.html',
  styles: []
})
export class CountriesComponent implements OnInit {

  form: RowData[] = [
    {
      row: [
        { label: 'Country Name', name: 'name', validator: Validators.required },
      
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
  items: Observable<Country[]>
  columns: TableData[] = [
    {title:'Country Name', value:'name'},
    {title:'Code', value:'code'},
    {title:'Status', value:'status', bool:true},
  ]

  selectAllSelector = selectAllCountries
  selectCurrent = selectCurrentCountry
  constructor() { }

  ngOnInit() {

  }

}
