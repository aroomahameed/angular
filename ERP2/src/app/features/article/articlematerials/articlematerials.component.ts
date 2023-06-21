import { loadArticlematerials, selectAllArticlematerials, Articlematerial ,deleteArticlematerial} from './../../store/article/articlematerial';
import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Store } from '@ngrx/store';
import { BsModalService } from 'ngx-bootstrap/modal';
import {MaterialFormComponent} from './material-form/material-form.component'
import { DialogsService } from '../../../shared/dialogs/dialogs.service';
@Component({
  selector: 'smart-articlematerials',
  templateUrl: './articlematerials.component.html',
  styles: []
})
export class ArticlematerialsComponent implements OnInit {
  @Input() deleteItemName = 'Quotation';
  @Input() deleteMessage = 'Do you wish to delete this';
  material: Observable<Articlematerial[]>

  columns: TableData[] = [
  
    { title: 'Material Code',  value: ['material', 'name'], sortable:true },
    {title:'Status', value:'status', bool:true},
  ]
constructor(private store: Store<any>,private modalService:BsModalService,private dialogService: DialogsService) { }

  ngOnInit() {

    this.store.dispatch(loadArticlematerials())
    this.material = this.store.select(selectAllArticlematerials)
  }
  onCreate(){
    const initialState = { 
      title: 'Add',
          };
    this.modalService.show(MaterialFormComponent, { initialState, class: 'modal-lg' });
  }
  onEdit(material: Articlematerial) {
    const initialState = { 
      material, 
      title: 'Update',
    
     };
    this.modalService.show(MaterialFormComponent, { initialState, class: 'modal-lg' });
   
  }

  async ondelete(id:Articlematerial){
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
      this.store.dispatch(deleteArticlematerial({data: id}))
    }
    }
  
}
