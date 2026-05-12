import { loadArticlemes, selectAllArticlemes, Articleme,deleteArticleme } from './../../store/article/articleme';
import { loadArticles, selectAllArticles, Article} from './../../store/article/article';
import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Store } from '@ngrx/store';
import { BsModalService } from 'ngx-bootstrap/modal';
import {MeFormComponent} from './me-form/me-form.component'
import { DialogsService } from '../../../shared/dialogs/dialogs.service';
@Component({
  selector: 'smart-articlemes',
  templateUrl: './articlemes.component.html',
  styles: []
})
export class ArticlemesComponent implements OnInit {
  articleme: Observable<Articleme[]>
  articles: Observable<Article[]>
  @Input() deleteItemName = 'Row';
  @Input() deleteMessage = 'Do you wish to delete this';
  columns: TableData[] = [
    { title: 'Client', value: ['client', 'name'], sortable:true },
    { title: 'Model', value: ['model', 'name'], sortable:true },
    { title: 'Article', value: ['article', 'name'], sortable:true },
    { title: 'GSD Target', value: 'gsd_target' },
    { title: 'ME Target', value: 'me_target' },
    { title: 'Status', value: 'status', bool: true },
  ];
  columns2: TableData[] = [
    { title: 'Client', value: ['client', 'name'], sortable:true },
    { title: 'Model', value: ['model', 'name'], sortable:true },
    { title: 'Article', value:'name', sortable:true },

  ]
  constructor(private store: Store<any>,private modalService:BsModalService,private dialogService: DialogsService) { }

  ngOnInit() {

    this.store.dispatch(loadArticlemes())
    this.articleme = this.store.select(selectAllArticlemes)
    this.store.dispatch(loadArticles())
    this.articles = this.store.select(selectAllArticles)
  }
  onCreate(articles:Article){
    const initialState = { 
      articles,
      title: 'Add',
          };
    this.modalService.show(MeFormComponent, { initialState, class: 'modal-mx' });
  }
  onEdit(articleme: Articleme) {
    const initialState = { 
      articleme, 
      title: 'Update',
    
     };
    this.modalService.show(MeFormComponent, { initialState, class: 'modal-mx' });
   
  }

  async ondelete(id:Articleme){
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
      this.store.dispatch(deleteArticleme({data: id}))
    }
    }

}
