import { deleteServiceidentifier,selectAllServiceidentifiers, loadServiceidentifiers ,Serviceidentifier } from './../../store/customer/serviceidentifier';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { IdenifirerFormComponent } from './idenifirer-form/idenifirer-form.component';
import { DialogsService } from '../../../shared/dialogs/dialogs.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'smart-serviceidentifiers',
  templateUrl: './serviceidentifiers.component.html',
  styles: []
})
export class ServiceidentifiersComponent implements OnInit {
  columns: TableData[] = [
    {title:'Identifier Name', value:'name'},
    {title:'Identifier Code', value:'identifier'},
    {title:'Status', value:'status', bool:true},
  ]
  serviceidentifier: Observable<Serviceidentifier[]>;
  @Input() deleteMessage = 'Do you wish to delete this';
  @Input() deleteItemName = 'Row'
  constructor(private modalService: BsModalService, private store: Store<any>, private dialogService: DialogsService) { }
  ngOnInit() {
    this.store.dispatch(loadServiceidentifiers());
    this.serviceidentifier = this.store.select(selectAllServiceidentifiers);
  }


  onCreate() {
    
    const initialState = {
      title: 'Add',
   
    };
    this.modalService.show(IdenifirerFormComponent, { initialState, class: 'modal-lg' });

  }

  onEdit(serviceidentifier: Serviceidentifier) {
    const initialState = {
      serviceidentifier,
      title: 'Update',

    };
    this.modalService.show(IdenifirerFormComponent, { initialState, class: 'modal-lg' });
  }

  async ondelete(id: Serviceidentifier) {
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
      this.store.dispatch(deleteServiceidentifier({ data: id }))

    }

  }
  // form: RowData[] = [
  //   {
  //     row: [
  //       { label: 'Serviceidentifier Name', name: 'name', validator: Validators.required },
  
  //     ]
  //   },
  //   {
  //     row: [
      
  //       { label: 'Code', name: 'code', validator: Validators.required },
  //     ]
  //   }, {
  //     row: [
  //       { label: 'Status', name: 'status', type:'check' }
  //     ]
  //   }
  //   , {
  //     row: [
  //       { label: 'ID', name: 'id', type:'hidden' }
  //     ]
  //   }
  // ]
  // items: Observable<Serviceidentifier[]>
  // columns: TableData[] = [
  //   {title:'Serviceidentifier Name', value:'name'},
  //   {title:'Code', value:'code'},
  //   {title:'Status', value:'status', bool:true},
  // ]

  // selectAllSelector = selectAllServiceidentifiers
  // selectCurrent = selectCurrentServiceidentifier
  // constructor() { }

  // ngOnInit() {

  // }

}
