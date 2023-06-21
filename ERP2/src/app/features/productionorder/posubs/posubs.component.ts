import { selectCurrentPosub,selectAllPosubs, loadPosubs, Posub,deletePosub } from './../../store/productionorder/posub';
import { Component, OnInit,Input } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Observable,of } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { DialogsService } from '../../../shared/dialogs/dialogs.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import {SubFormComponent} from './sub-form/sub-form.component'
import {DetailFormComponent} from '../podetails/detail-form/detail-form.component'



@Component({
  selector: 'smart-posubs',
  templateUrl: './posubs.component.html',
  styles: []
})
export class PosubsComponent implements OnInit {
  posub: Observable<Posub[]>
  @Input() deleteMessage = 'Do you wish to delete this';
  @Input() deleteItemName = 'Row'
  form: RowData[] = []
  columns: TableData[] = [
    { title: 'Po Number', value: ['production_order','po_number'] },
    { title: 'Model', value: ['model','name'] },
    { title: 'Article', value: ['article','name'] },
    {title:'Status', value:'status', bool:true},
  ]

constructor(private store: Store<any>,private modalService:BsModalService,private _router: Router, private dialogService: DialogsService) { }
  ngOnInit() {
    this.store.dispatch(loadPosubs())
    this.posub = this.store.select(selectAllPosubs)
  }
onCreate(){
  const initialState = { 
    title: 'Add',
        };
  this.modalService.show(SubFormComponent, { initialState, class: 'modal-xm' });
}
onEdit(posub: Posub) {
  const initialState = { 
    posub, 
    title: 'Update',
  
   };
  this.modalService.show(SubFormComponent, { initialState, class: 'modal-xm' });
 
}
oncreatesub(posub: Posub){
  const initialState = { 
    posub, 
    title: 'Create',
   };
  this.modalService.show(DetailFormComponent, { initialState, class: 'modal-xl' });
}
async ondelete(id: Posub) {
  const result = await this.dialogService.confirm({
    title: `<i class='fal fa-times-circle text-danger mr-2'></i>
    ${this.deleteMessage} <span class='fw-500'>&nbsp;${[this.deleteItemName]}&nbsp;</span>?`,
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
    this.store.dispatch(deletePosub({ data: id }))

  }

}
}
