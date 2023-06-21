import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Quotation ,loadQuotations,selectAllQuotations,deleteQuotation } from '../../store/purchaseorder/quotation';
import { BsModalService } from 'ngx-bootstrap/modal';
import { QuotationFormComponent } from './quotation-form/quotation-form.component';
import { Store } from '@ngrx/store';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { DialogsService } from '../../../shared/dialogs/dialogs.service';


@Component({
  selector: 'smart-quotations',
  templateUrl: './quotations.component.html',
  styles: []
})
export class QuotationsComponent implements OnInit {
  columns: TableData[] = [
    { title: 'Vendor Name',  value:[ 'vendor','name']},
    { title: 'Date', value: 'date', sortable:true, date:true, dateFormat:'MMM dd ,yyyy' },
    { title: 'Reg Date', value: 'req_date', sortable:true, date:true, dateFormat:'MMM dd ,yyyy' },
    { title: 'Payment Term',  value:[ 'payment_term','name']},
    { title: 'Status', value: 'status', bool: true, boolText:{yes: 'Active', no: 'In-Active'} },
  ]
  @Input() deleteItemName = 'Row';
  @Input() deleteMessage = 'Do you wish to delete this';
 
  quotation: Observable<Quotation[]>;
  constructor(private modalService: BsModalService, private store: Store<any>,private dialogService: DialogsService) { }

  ngOnInit() {
    this.store.dispatch(loadQuotations());
    this.quotation = this.store.select(selectAllQuotations);
  }

  onCreate() {
    const initialState = { 
      title: 'Add',
     };
    this.modalService.show(QuotationFormComponent, { initialState, class: 'modal-xl' });
  }

  onEdit(quotation: Quotation) {
    const initialState = { 
      quotation, 
      title: 'Update',

     };
    this.modalService.show(QuotationFormComponent, { initialState, class: 'modal-xl' });
  }
  async ondelete(id:Quotation){
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
    this.store.dispatch(deleteQuotation({data: id}))
  }
  }
}
