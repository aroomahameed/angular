import { selectAllProductionlines,loadProductionlines, Productionline,deleteProductionline } from './../../store/article/productionline';
import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Store } from '@ngrx/store';
import { BsModalService } from 'ngx-bootstrap/modal';
import {PrdlinesFormComponent} from './prdlines-form/prdlines-form.component'
import { MaterialFormComponent } from '../articlematerials/material-form/material-form.component';
import { DialogsService } from '../../../shared/dialogs/dialogs.service';

@Component({
  selector: 'smart-productionlines',
  templateUrl: './productionlines.component.html',
  styles: []
})
export class ProductionlinesComponent implements OnInit {
  @Input() deleteItemName = 'Line';
  @Input() deleteMessage = 'Do you wish to delete this';
  productionline: Observable<Productionline[]>
  columns: TableData[] = [
    { title: 'Client', value: ['client', 'name'], sortable:true },
    { title: 'Model', value: ['model', 'name'], sortable:true },
    { title: 'Article', value: ['article', 'name'], sortable:true },
    { title: 'Article Size',  value: ['size', 'size'], sortable:true },
    {title:'Production Line', value:'name'},
    {title:'Status', value:'status', bool:true},
  ]
  constructor(private store: Store<any>,private modalService:BsModalService,private dialogService: DialogsService) { }

  ngOnInit() {

    this.store.dispatch(loadProductionlines())
    this.productionline = this.store.select(selectAllProductionlines)
  }
  onCreate(){
    const initialState = { 
      title: 'Add',
          };
    this.modalService.show(PrdlinesFormComponent, { initialState, class: 'modal-mx' });
  }
  onEdit(productionline: Productionline) {
    const initialState = { 
      productionline, 
      title: 'Update',
    
     };
    this.modalService.show(PrdlinesFormComponent, { initialState, class: 'modal-mx' });
   
  }

  async ondelete(id:Productionline){
    const result = await this.dialogService.confirm({
      title: `<i class='fal fa-times-circle text-danger mr-2'></i>
      ${this.deleteMessage} <span class='fw-500'>&nbsp;${[this.deleteItemName]} &nbsp;</span>?`,
      message: `<span><strong>Warning:</strong> This action cannot be undone!</span>`,
      buttons: {
        confirm: {
          label: 'Yes',
          className: 'btn-danger shadow-0'
        },
        cancel: {
          label: 'No',
          className: 'btn-default'
        }
      }
    }).toPromise();
  
    if (result) {
      this.store.dispatch(deleteProductionline({data: id}))
    }
    }

  oncreateMaterial(productionline){
    const initialState = { 
      productionline, 
      title: 'Create',
     };
    this.modalService.show(MaterialFormComponent, { initialState, class: 'modal-lg' });
  }


}
