import { loadArticlerates, selectAllArticlerates, Articlerate ,deleteArticlerate} from './../../store/article/articlerate';
import { selectAllArticlesizes, loadArticlesizes, Articlesize, } from './../../store/article/articlesize';
import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Store } from '@ngrx/store';
import { BsModalService } from 'ngx-bootstrap/modal';
import {RateFormComponent} from './rate-form/rate-form.component'
import { DialogsService } from '../../../shared/dialogs/dialogs.service';
@Component({
  selector: 'smart-articlerates',
  templateUrl: './articlerates.component.html',
  styles: []
})
export class ArticleratesComponent implements OnInit {
  articlerate: Observable<Articlerate[]>
  articlesize:Observable<Articlesize[]>
  @Input() deleteItemName = 'Row';
  @Input() deleteMessage = 'Do you wish to delete this';
  columns: TableData[] = [
    { title: 'Client', value: ['client', 'name'], sortable:true },
    { title: 'Model', value: ['model', 'name'], sortable:true },
    { title: 'Article', value: ['article', 'name'], sortable:true },
    { title: 'Name', value: 'name', sortable:true },
    { title: 'Status', value: 'status', bool: true },
  ];
  columns2: TableData[] = [
    { title: 'Client', value: ['client', 'name'], sortable:true },
    { title: 'Model', value: ['model', 'name'], sortable:true },
    { title: 'Article', value: ['article', 'name'], sortable:true },
    { title: 'Size', value: 'size', sortable:true },
    { title: 'Status', value: 'status', bool: true },
  ]
  constructor(private store: Store<any>,private modalService:BsModalService,private dialogService: DialogsService) { }

  ngOnInit() {

    this.store.dispatch(loadArticlerates())
    this.articlerate = this.store.select(selectAllArticlerates)
    this.store.dispatch(loadArticlesizes())
    this.articlesize = this.store.select(selectAllArticlesizes)
  }
  onCreate(articlesize:Articlesize){
    const initialState = {
      articlesize,
      title: 'Add',
          };
    this.modalService.show(RateFormComponent, { initialState, class: 'modal-mx' });
  }
  onEdit(articlerate: Articlerate) {
    const initialState = { 
      articlerate, 
      title: 'Update',
    
     };
    this.modalService.show(RateFormComponent, { initialState, class: 'modal-mx' });
   
  }


  async ondelete(id:Articlerate){
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
      this.store.dispatch(deleteArticlerate({data: id}))
    }
    }

}
