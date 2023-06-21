import { selectCurrentPurchaseorderitem,selectAllPurchaseorderitems, Purchaseorderitem } from './../../store/purchaseorder/purchaseorderitem';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';

@Component({
  selector: 'smart-purchaseorderitems',
  templateUrl: './purchaseorderitems.component.html',
  styles: []
})
export class PurchaseorderitemsComponent implements OnInit {

  form: RowData[] = [
    {
      row: [
        { label: 'Purchaseorderitem Name', name: 'name', validator: Validators.required },
  
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
  items: Observable<Purchaseorderitem[]>
  columns: TableData[] = [
    {title:'Purchaseorderitem Name', value:'name'},
    {title:'Code', value:'code'},
    {title:'Status', value:'status', bool:true},
  ]

  selectAllSelector = selectAllPurchaseorderitems
  selectCurrent = selectCurrentPurchaseorderitem
  constructor() { }

  ngOnInit() {

  }

}
