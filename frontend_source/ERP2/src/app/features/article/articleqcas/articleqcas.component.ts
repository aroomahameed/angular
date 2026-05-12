import { loadArticleqcas, selectAllArticleqcas, Articleqca ,deleteArticleqca} from './../../store/article/articleqca';
import { selectAllArticlesizes, loadArticlesizes, Articlesize, } from './../../store/article/articlesize';
import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Store } from '@ngrx/store';
import { BsModalService } from 'ngx-bootstrap/modal';
import {QcaFormComponent} from './qca-form/qca-form.component'
import { DialogsService } from '../../../shared/dialogs/dialogs.service';

@Component({
  selector: 'smart-articleqcas',
  templateUrl: './articleqcas.component.html',
  styles: []
})
export class ArticleqcasComponent implements OnInit {
  articleqca: Observable<Articleqca[]>
  articlesize:Observable<Articlesize[]>
  @Input() deleteItemName = 'Row';
  @Input() deleteMessage = 'Do you wish to delete this';
  columns: TableData[] = [
    { title: 'Client', value: ['client', 'name'], sortable:true },
    { title: 'Model', value: ['model', 'name'], sortable:true },
    { title: 'Article', value: ['article', 'name'], sortable:true },
    { title: 'Name', value: 'name', sortable:true },
    { title: 'Status', value: 'status', bool: true },
  ]
  columns2: TableData[] = [
    { title: 'Client', value: ['client', 'name'], sortable:true },
    { title: 'Model', value: ['model', 'name'], sortable:true },
    { title: 'Article', value: ['article', 'name'], sortable:true },
    { title: 'Size', value: 'size', sortable:true },
    { title: 'Status', value: 'status', bool: true },
  ]
  constructor(private store: Store<any>,private modalService:BsModalService,private dialogService: DialogsService) { }

  ngOnInit() {

    this.store.dispatch(loadArticleqcas())
    this.articleqca = this.store.select(selectAllArticleqcas)
    this.store.dispatch(loadArticlesizes())
    this.articlesize = this.store.select(selectAllArticlesizes)
    
  }
  onCreate(articlesize:Articlesize){
    const initialState = {
      articlesize,
      title: 'Add',
          };
    this.modalService.show(QcaFormComponent, { initialState, class: 'modal-mx' });
  }
  onEdit(articleqca: Articleqca) {
    const initialState = { 
      articleqca, 
      title: 'Update',
    
     };
    this.modalService.show(QcaFormComponent, { initialState, class: 'modal-mx' });
   
  }


  async ondelete(id:Articleqca){
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
      this.store.dispatch(deleteArticleqca({data: id}))
    }
    }

}
