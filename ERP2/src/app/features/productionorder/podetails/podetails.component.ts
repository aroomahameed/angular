import { selectCurrentPodetail,selectAllPodetails,loadPodetails, Podetail,deletePodetail } from './../../store/productionorder/podetail';
import { Component, OnInit,Input } from '@angular/core';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { Observable,of } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Store } from '@ngrx/store';
import {Client ,loadClients,selectAllClients} from './../../store/customer/client';
import {Customer ,loadCustomers,selectAllCustomers} from './../../store/customer/customer';
import {Factorycode ,loadFactorycodes,selectAllFactorycodes} from './../../store/settings/factorycode';
import { Router } from '@angular/router';
import { DialogsService } from '../../../shared/dialogs/dialogs.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import {DetailFormComponent} from './detail-form/detail-form.component'
import {SubFormComponent} from '../posubs/sub-form/sub-form.component';
@Component({
  selector: 'smart-podetails',
  templateUrl: './podetails.component.html',
  styles: []
})
export class PodetailsComponent implements OnInit {

  podetail: Observable<Podetail[]>
  client: Observable<Client[]>
  customer: Observable<Customer[]>
  factorycode: Observable<Factorycode[]>
  @Input() deleteMessage = 'Do you wish to delete this';
  @Input() deleteItemName = 'Row'
  form: RowData[] = []
  columns: TableData[] = [
    { title: 'Po Number', value: ['production_order','po_number'] },
    { title: 'Model', value: ['production_order_sub','model','name'] },
    { title: 'Article', value: ['production_order_sub','article','name'] },
    { title: 'Size', value: ['article_size','size'] },
    {title:'Status', value:'status', bool:true},
  ]

  constructor(private store: Store<any>,private modalService:BsModalService, private dialogService: DialogsService) { }

  ngOnInit() {
    this.store.dispatch(loadPodetails())
    this.podetail = this.store.select(selectAllPodetails)
  }


onCreate(){
  const initialState = { 
    title: 'Add',
        };
  this.modalService.show(DetailFormComponent, { initialState, class: 'modal-xl' });
}
onEdit(podetail: Podetail) {
  const initialState = { 
    podetail, 
    title: 'Update',
  
   };
  this.modalService.show(DetailFormComponent, { initialState, class: 'modal-xl' });
 
}

async ondelete(id: Podetail) {
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
    this.store.dispatch(deletePodetail({ data: id }))

  }

}
}
