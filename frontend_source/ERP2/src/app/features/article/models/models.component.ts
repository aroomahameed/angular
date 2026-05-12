import { selectAllModels,loadModels, Model,deleteModel } from './../../store/article/model';
import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Store } from '@ngrx/store';
import { BsModalService } from 'ngx-bootstrap/modal';
import {ModelFormComponent} from './model-form/model-form.component'
import { ArticleFromComponent } from '../articles/article-from/article-from.component';
import { DialogsService } from '../../../shared/dialogs/dialogs.service';



@Component({
  selector: 'smart-models',
  templateUrl: './models.component.html',
  styles: []
})
export class ModelsComponent implements OnInit {
  @Input() deleteItemName = 'Model';
  @Input() deleteMessage = 'Do you wish to delete this';
  models: Observable<Model[]>
  columns: TableData[] = [
    { title: 'Client', value: ['client', 'name'], sortable:true },
    {title:'Model', value:'name',sortable:true},
    {title:'Status', value:'status', bool:true,sortable:true},
  ]
  constructor(private store: Store<any>,private modalService:BsModalService,private dialogService:DialogsService ) { }

  ngOnInit() {

    this.store.dispatch(loadModels())
    this.models = this.store.select(selectAllModels)
  }
  onCreate(){
    const initialState = { 
      title: 'Add',
          };
    this.modalService.show(ModelFormComponent, { initialState, class: 'modal-lg' });
  }
  onEdit(models: Model) {
    const initialState = { 
      models, 
      title: 'Update',
    
     };
    this.modalService.show(ModelFormComponent, { initialState, class: 'modal-lg' });
   
  }

  async ondelete(id:Model){
    const result = await this.dialogService.confirm({
      title: `<i class='fal fa-times-circle text-danger mr-2'></i>
      ${this.deleteMessage}  <span class='fw-500'>&nbsp;${[this.deleteItemName]}&nbsp;</span>?`,
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
      this.store.dispatch(deleteModel({data: id}))
    }
    }

  oncreateMaterial(models){
    const initialState = { 
      models, 
      title: 'Create',
     };
    this.modalService.show(ArticleFromComponent, { initialState, class: 'modal-lg' });
  }



 


}
