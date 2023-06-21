import { selectCurrentTax,selectAllTaxes, Tax, loadTaxes } from './../../store/purchaseorder/tax';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'smart-taxes',
  templateUrl: './taxes.component.html',
  styles: []
})
export class TaxesComponent implements OnInit {

  form: RowData[] = [
    {
      row: [
        { label: 'Tax Name', name: 'name', validator: Validators.required },
  
      ]
    },
    {
      row: [
      
        { label: 'Percent', name: 'percent', validator: Validators.required,type:'number' },
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
  items: Observable<Tax[]>
  columns: TableData[] = [
    {title:'Tax Name', value:'name'},
    {title:'Percent', value:'percent'},
    {title:'Status', value:'status', bool:true},
  ]

  selectAllSelector = selectAllTaxes
  selectCurrent = selectCurrentTax
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(loadTaxes());

  }

}
