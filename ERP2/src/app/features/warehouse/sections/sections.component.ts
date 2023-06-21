import { selectCurrentSection,selectAllSections, Section } from './../../store/warehouse/section';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';

@Component({
  selector: 'smart-sections',
  templateUrl: './sections.component.html',
  styles: []
})
export class SectionsComponent implements OnInit {

  form: RowData[] = [
    {
      row: [
        { label: 'Section Name', name: 'name', validator: Validators.required },
       
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
  items: Observable<Section[]>
  columns: TableData[] = [
    {title:'Section Name', value:'name'},
   
    {title:'Status', value:'status', bool:true},
  ]

  selectAllSelector = selectAllSections
  selectCurrent = selectCurrentSection
  constructor() { }

  ngOnInit() {

  }

}
