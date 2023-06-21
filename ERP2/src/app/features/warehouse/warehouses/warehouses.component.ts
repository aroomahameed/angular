import { selectCurrentWarehouse,selectAllWarehouses, Warehouse } from './../../store/warehouse/warehouse';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';

@Component({
  selector: 'smart-warehouses',
  templateUrl: './warehouses.component.html',
  styles: []
})
export class WarehousesComponent implements OnInit {

  form: RowData[] = [
    {
      row: [
        { label: 'Warehouse Name', name: 'name', validator: Validators.required },
  
      ]
    },
    {
      row: [
      
        { label: 'Location', name: 'location', validator: Validators.required },
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
  items: Observable<Warehouse[]>
  columns: TableData[] = [
    {title:'Warehouse Name', value:'name'},
    {title:'Location', value:'location'},
    {title:'Status', value:'status', bool:true},
  ]

  selectAllSelector = selectAllWarehouses
  selectCurrent = selectCurrentWarehouse
  constructor() { }

  ngOnInit() {

  }

}
