import { selectCurrentPaymentterm,selectAllPaymentterms, Paymentterm } from './../../store/settings/paymentterm';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';

@Component({
  selector: 'smart-paymentterms',
  templateUrl: './paymentterms.component.html',
  styles: []
})
export class PaymenttermsComponent implements OnInit {

  form: RowData[] = [
    {
      row: [
        { label: 'Payment Term Name', name: 'name', validator: Validators.required },
  
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
  items: Observable<Paymentterm[]>
  columns: TableData[] = [
    {title:'Payment Term Name', value:'name'},
    {title:'Code', value:'code'},
    {title:'Status', value:'status', bool:true},
  ]

  selectAllSelector = selectAllPaymentterms
  selectCurrent = selectCurrentPaymentterm
  constructor() { }

  ngOnInit() {

  }

}
