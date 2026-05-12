import { selectCurrentPohead,selectAllPoheads, Pohead ,loadPoheads,deletePohead} from './../../store/productionorder/pohead';
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
import {PoheadFormComponent} from './pohead-form/pohead-form.component'
import {SubFormComponent} from '../posubs/sub-form/sub-form.component'


@Component({
  selector: 'smart-poheads',
  templateUrl: './poheads.component.html',
  styles: []
})
export class PoheadsComponent implements OnInit {

  pohead: Observable<Pohead[]>
  client: Observable<Client[]>
  customer: Observable<Customer[]>
  factorycode: Observable<Factorycode[]>
  @Input() deleteMessage = 'Do you wish to delete this';
  @Input() deleteItemName = 'Row'
  form: RowData[] = []
  columns: TableData[] = [
    { title: 'Client', value: ['client','name'] },
    { title: 'Customer', value: ['customer','name'] },
    {title:'PO Number', value:'po_number'},
    {title:'Status', value:'status', bool:true},
  ]

  constructor(private store: Store<any>,private modalService:BsModalService,private _router: Router, private dialogService: DialogsService) { }

  ngOnInit() {
    this.store.dispatch(loadPoheads())
    this.pohead = this.store.select(selectAllPoheads)
    this.store.dispatch(loadClients())
    this.client = this.store.select(selectAllClients)
    this.store.dispatch(loadCustomers())
    this.customer = this.store.select(selectAllCustomers)
    this.store.dispatch(loadFactorycodes())
    this.factorycode = this.store.select(selectAllFactorycodes)



  }


onCreate(){
  const initialState = { 
    title: 'Add',
        };
  this.modalService.show(PoheadFormComponent, { initialState, class: 'modal-xl' });
}
onEdit(pohead: Pohead) {
  const initialState = { 
    pohead, 
    title: 'Update',
  
   };
  this.modalService.show(PoheadFormComponent, { initialState, class: 'modal-xl' });
 
}
oncreatesub(pohead: Pohead){
  const initialState = { 
    pohead, 
    title: 'Create',
   };
  this.modalService.show(SubFormComponent, { initialState, class: 'modal-xm' });
}
async ondelete(id: Pohead) {
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
    this.store.dispatch(deletePohead({ data: id }))

  }

}
}
