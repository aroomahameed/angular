import { selectCurrentQuotationitem,selectAllQuotationitems, Quotationitem } from './../../store/purchaseorder/quotationitem';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';

@Component({
  selector: 'smart-quotationitems',
  templateUrl: './quotationitems.component.html',
  styles: []
})
export class QuotationitemsComponent implements OnInit {

  form: RowData[] = [
    {
      row: [
        { label: 'Quotationitem Name', name: 'name', validator: Validators.required },
  
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
  items: Observable<Quotationitem[]>
  columns: TableData[] = [
    {title:'Quotationitem Name', value:'name'},
    {title:'Code', value:'code'},
    {title:'Status', value:'status', bool:true},
  ]

  selectAllSelector = selectAllQuotationitems
  selectCurrent = selectCurrentQuotationitem
  constructor() { }

  ngOnInit() {

  }

}
