import { selectCurrentCarton,selectAllCartons, Carton } from './../../store/article/carton';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Uom } from '../../store/settings/uom/uom';
import { Store } from '@ngrx/store';
import { loadUoms, selectAllUoms } from '../../store/settings/uom';

@Component({
  selector: 'smart-cartons',
  templateUrl: './cartons.component.html',
  styles: []
})
export class CartonsComponent implements OnInit {

  uom: Observable<Uom[]>
  selectAllSelector = selectAllCartons
  selectCurrent = selectCurrentCarton
  constructor(private store: Store<any>) { }
  form: RowData[] = []
  columns: TableData[] = [
    {title:'Carton Name', value:'name'},
    {title:'UOM', value:['unit','name']},
    {title:'Status', value:'status', bool:true},
  ]
  ngOnInit() {
    this.store.dispatch(loadUoms())
    this.uom = this.store.select(selectAllUoms)
    this.form = [
      {
            row: [
              { label: 'Carton Name', name: 'name', validator: Validators.required },
        
            ]
          },
          {
            row: [
            
              { label: 'Length', name: 'length', validator: Validators.required },
            ]
          },
          
          {
            row: [
            
              { label: 'Width', name: 'width', validator: Validators.required },
            ]
          },
          {
            row: [
            
              { label: 'Height', name: 'height', validator: Validators.required },
            ]
          },
          {
            row: [
            
              { label: 'Weight', name: 'weight', validator: Validators.required },
            ]
          },
          {
            row: [
            
              { label: 'UOM', name: 'unit', items:this.uom, validator: Validators.required,type:'select' },
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




  }



}
