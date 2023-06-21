import { Categorytype } from './../../store/merchandise/categorytype/categorytype';
import { Store } from '@ngrx/store';
import { selectCurrentCategory,selectAllCategories, Category } from './../../store/merchandise/category';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { loadCategorytypes, selectAllCategorytypes } from '../../store/merchandise/categorytype';

@Component({
  selector: 'smart-categories',
  templateUrl: './categories.component.html',
  styles: []
})
export class CategoriesComponent implements OnInit {

  types: Observable<Categorytype[]>
  
  form: RowData[] = []

  columns: TableData[] = [
    {title:'Category Name', value:'name'},
    {title:'Type', value:['category_type', 'name']},
    {title:'Status', value:'status', bool:true},
  ]

  selectAllSelector = selectAllCategories
  selectCurrent = selectCurrentCategory
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(loadCategorytypes())
    this.types = this.store.select(selectAllCategorytypes)

    this.form= [
      {
        row: [
          { label: 'Category Name', name: 'name', validator: Validators.required },
        ]
      },
      {
        row: [
          { label: 'Category Type', name: 'category_type', items: this.types , validator: Validators.required , type:'select'},
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
