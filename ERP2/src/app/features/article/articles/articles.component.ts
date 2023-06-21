import { selectAllArticles, Article,deleteArticle } from './../../store/article/article';
import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Store } from '@ngrx/store';
import { loadArticles } from '../../store/article/article';
import { BsModalService } from 'ngx-bootstrap/modal';
import {ArticleFromComponent} from './article-from/article-from.component'
import { ArticlesizeFormComponent } from '../articlesizes/articlesize-form/articlesize-form.component';
import { DialogsService } from '../../../shared/dialogs/dialogs.service';

@Component({
  selector: 'smart-articles',
  templateUrl: './articles.component.html',
  styles: []
})
export class ArticlesComponent implements OnInit {
  @Input() deleteItemName = 'Article';
  @Input() deleteMessage = 'Do you wish to delete this';
  article: Observable<Article[]>
  constructor(private store: Store<any>,private modalService:BsModalService,private dialogService: DialogsService) { }
  
  columns: TableData[] = [
    { title: 'Client', value: ['client', 'name'], sortable:true },
    { title: 'Model', value: ['model', 'name'], sortable:true },
    { title: 'Article Name', value: 'name',sortable:true  },
    { title: 'Art Number', value: 'art_number',sortable:true  },
    { title: 'Status', value: 'status', bool: true ,sortable:true },
  ]
  ngOnInit() {
    this.store.dispatch(loadArticles())
    this.article = this.store.select(selectAllArticles)
  }
  
    onCreate(){
      const initialState = { 
        title: 'Add',
        imageurl: 'assets/img/demo/upload.png'
       };
      this.modalService.show(ArticleFromComponent, { initialState, class: 'modal-lg' });
    }
    onEdit(article: Article) {
      const initialState = { 
        article, 
        title: 'Update',
        imageurl: article.image
       };
      this.modalService.show(ArticleFromComponent, { initialState, class: 'modal-lg' });
     
    }

    async ondelete(id:Article){
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
        this.store.dispatch(deleteArticle({data: id}))
      }
      }
    oncreateartsize(article){
      const initialState = { 
        article, 
        title: 'Create',
       };
      this.modalService.show(ArticlesizeFormComponent, { initialState, class: 'modal-lg' });
    }
  }
  
