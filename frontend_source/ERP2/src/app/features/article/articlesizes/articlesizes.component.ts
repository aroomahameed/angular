import { selectAllArticlesizes, loadArticlesizes, Articlesize, deleteArticlesize} from './../../store/article/articlesize';
import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Store } from '@ngrx/store';
import { BsModalService } from 'ngx-bootstrap/modal';
import {ArticlesizeFormComponent} from './articlesize-form/articlesize-form.component'
import { PrdlinesFormComponent } from '../productionlines/prdlines-form/prdlines-form.component';
import { DialogsService } from '../../../shared/dialogs/dialogs.service';
@Component({
  selector: 'smart-articlesizes',
  templateUrl: './articlesizes.component.html',
  styles: []
})
export class ArticlesizesComponent implements OnInit {
  @Input() deleteItemName = 'Size';
  @Input() deleteMessage = 'Do you wish to delete this';
  articlesize:Observable<Articlesize[]>

  constructor(private store: Store<any>,private modalService:BsModalService,private dialogService: DialogsService) { }

  columns: TableData[] = [
    { title: 'Client', value: ['client', 'name'], sortable:true },
    { title: 'Model', value: ['model', 'name'], sortable:true },
    { title: 'Article', value: ['article', 'name'], sortable:true },
    { title: 'Article Size', value: 'size', sortable:true },
    { title: 'Status', value: 'status', bool: true },
  ]
  ngOnInit() {
    this.store.dispatch(loadArticlesizes())
    this.articlesize = this.store.select(selectAllArticlesizes)
  }
    onCreate(){
      const initialState = { 
        title: 'Add',
            };
      this.modalService.show(ArticlesizeFormComponent, { initialState, class: 'modal-lg' });
    }
    onEdit(articlesize: Articlesize) {
      const initialState = { 
        articlesize, 
        title: 'Update',
      
       };
      this.modalService.show(ArticlesizeFormComponent, { initialState, class: 'modal-lg' });
     
    }

    async ondelete(id:Articlesize){
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
        this.store.dispatch(deleteArticlesize({data: id}))
      }
      }
    oncreateprdlines(articlesize){
      const initialState = { 
        articlesize, 
        title: 'Create',
       };
      this.modalService.show(PrdlinesFormComponent, { initialState, class: 'modal-mx' });
    }

}
