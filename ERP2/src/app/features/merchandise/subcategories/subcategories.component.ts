import { loadCategories ,selectAllCategories,Category} from './../../store/finance/category';
import { Store } from '@ngrx/store';
import { selectCurrentSubcategory,selectAllSubcategories, Subcategory } from './../../store/merchandise/subcategory';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';

@Component({
  selector: 'smart-subcategories',
  templateUrl: './subcategories.component.html',
  styles: []
})
export class SubcategoriesComponent implements OnInit {

  categories: Observable<Category[]>
  form: RowData[] = []
  items: Observable<Subcategory[]>
  columns: TableData[] = [
    {title:'Subcategory Name', value:'name'},
    {title:'Category', value:['category', 'name']},
    {title:'Status', value:'status', bool:true},
  ]

  selectAllSelector = selectAllSubcategories
  selectCurrent = selectCurrentSubcategory
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(loadCategories())
    this.categories = this.store.select(selectAllCategories)
    this.form = [
      {
        row: [
          { label: 'Name', name: 'name', validator: Validators.required },
         
        ]
      },
      {
        row: [
      
          { label: 'Category', name: 'category', validator: Validators.required, type:'select', items: this.categories },
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
