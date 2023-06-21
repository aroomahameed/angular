import { Purchaseorder,loadPurchaseorders,deletePurchaseorder,selectAllPurchaseorders } from './../../store/purchaseorder/purchaseorder';
import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PoFormComponent } from './po-form/po-form.component';
import { Store } from '@ngrx/store';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { DialogsService } from '../../../shared/dialogs/dialogs.service';


@Component({
  selector: 'smart-purchaseorders',
  templateUrl: './purchaseorders.component.html',
  styles: []
})
export class PurchaseordersComponent implements OnInit {
  columns: TableData[] = [
    { title: 'Vendor Name',  value:[ 'vendor','name']},
    { title: 'Date', value: 'date', sortable:true, date:true, dateFormat:'MMM dd ,yyyy' },
    { title: 'Reg Date', value: 'req_date', sortable:true, date:true, dateFormat:'MMM dd ,yyyy' },
    { title: 'Payment Term',  value:[ 'payment_term','name']},
    { title: 'Status', value: 'status', bool: true, boolText:{yes: 'Active', no: 'In-Active'} },
  ]
  @Input() deleteItemName = 'Row';
  @Input() deleteMessage = 'Do you wish to delete this';
 
  purchaseorder: Observable<Purchaseorder[]>;
  constructor(private modalService: BsModalService, private store: Store<any>,private dialogService: DialogsService) { }

  ngOnInit() {
    this.store.dispatch(loadPurchaseorders());
    this.purchaseorder = this.store.select(selectAllPurchaseorders);
  }

  onCreate() {
    const initialState = { 
      title: 'Add',
     };
    this.modalService.show(PoFormComponent, { initialState, class: 'modal-xl' });
  }

  onEdit(purchaseorder: Purchaseorder) {
    const initialState = { 
      purchaseorder, 
      title: 'Update',

     };
    this.modalService.show(PoFormComponent, { initialState, class: 'modal-xl' });
  }
  async ondelete(id:Purchaseorder){
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
    this.store.dispatch(deletePurchaseorder({data: id}))
  }
  }
}
