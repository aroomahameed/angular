import { selectCurrentLabball,selectAllLabballs,loadLabballs, Labball,deleteLabball } from './../../store/lab/labball';
import { selectAllWhentrys,loadWhentrys, Whentry,deleteWhentry } from './../../store/lab/whentry';
import { Component, OnInit,Input } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Store } from '@ngrx/store';
import { loadArticles, selectAllArticles,Article } from '../../store/article/article';
import { DialogsService } from '../../../shared/dialogs/dialogs.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import {BallFormComponent} from './ball-form/ball-form.component';
import {WhentrysComponent} from '../whentrys/whentrys.component'



@Component({
  selector: 'smart-labballs',
  templateUrl: './labballs.component.html',
  styles: []
})
export class LabballsComponent implements OnInit {
  labballs: Observable<Labball[]>
  article: Observable<Article[]>
  whentry: Observable<Whentry[]>
  @Input() deleteItemName = 'Row';
  @Input() deleteMessage = 'Do you wish to delete this';

  constructor(private store: Store<any>,private modalService:BsModalService,private dialogService: DialogsService) { }
  columns: TableData[] = [
    {title:'Date', value:'date' ,date:true},
    { title: 'Article', value: ['article_no', 'name'], sortable:true },
    {title:'Status', value:'status', bool:true},
  ]
  columns2: TableData[] = [
    {title:'Serial Number', value:'serial_no' },
    { title: 'Test Name', value: 'test_name', sortable:true },
    { title: 'Carton Number', value: 'carton_number', sortable:true },
    { title: 'Carton Status', value: 'carton_status', sortable:true },
    {title:'Status', value:'status', bool:true},
  ]



  ngOnInit() {
    this.store.dispatch(loadArticles())
    this.article = this.store.select(selectAllArticles)
    this.store.dispatch(loadLabballs())
    this.labballs = this.store.select(selectAllLabballs)
    this.store.dispatch(loadWhentrys())
    this.whentry = this.store.select(selectAllWhentrys)
  }
  
    onCreate(){
      const initialState = { 
        title: 'Add',
        imageurl: 'assets/img/demo/upload.png'
       };
      this.modalService.show(BallFormComponent, { initialState, class: 'modal-lg' });
    }
    onEdit(labballs: Labball) {
      const initialState = { 
        labballs, 
        title: 'Update',
       
       };
      this.modalService.show(BallFormComponent, { initialState, class: 'modal-lg' });
     
    }

    async ondelete(id:Labball){
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
        this.store.dispatch(deleteLabball({data: id}))
      }
      }
    oncreateartsize(labballs){
      const initialState = { 
        labballs, 
        title: 'Create',
       };
      this.modalService.show(WhentrysComponent, { initialState, class: 'modal-lg' });
    }
    onEditWHentry(whentry: Whentry) {
      const initialState = { 
        whentry,
        labballs:this.labballs,

        title: 'Update',
       
       };
      this.modalService.show(WhentrysComponent, { initialState, class: 'modal-lg' });
     
    }

    async ondeleteWHentry(id:Whentry){
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
        this.store.dispatch(deleteWhentry({data: id}))
      }
      }

}
