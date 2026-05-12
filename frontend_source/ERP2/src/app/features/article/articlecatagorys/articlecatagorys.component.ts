import { selectCurrentArticlecatagory,selectAllArticlecatagorys, Articlecatagory,loadArticlecatagorys } from './../../store/article/articlecatagory';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'smart-articlecatagorys',
  templateUrl: './articlecatagorys.component.html',
  styles: []
})
export class ArticlecatagorysComponent implements OnInit {

  form: RowData[] = [
    {
      row: [
        { label: 'Article Category Name', name: 'name', validator: Validators.required },
  
      ]
    },
    {
      row: [
      
        { label: 'Remarks', name: 'remarks', validator: Validators.required },
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
  items: Observable<Articlecatagory[]>
  columns: TableData[] = [
    {title:'Article Category Name', value:'name'},
    {title:'Remarks', value:'remarks'},
    {title:'Status', value:'status', bool:true},
  ]

  selectAllSelector = selectAllArticlecatagorys
  selectCurrent = selectCurrentArticlecatagory
  constructor( private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(loadArticlecatagorys());
    
  }

}
