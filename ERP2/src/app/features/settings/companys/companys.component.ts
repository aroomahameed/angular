import {selectAllCompanys, loadCompanys, deleteCompany, Company } from './../../store/settings/company';
import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CompanyFormComponent } from './company-form/company-form.component';
import { Store } from '@ngrx/store';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { DialogsService } from '../../../shared/dialogs/dialogs.service';

@Component({
  selector: 'smart-companys',
  templateUrl: './companys.component.html',
  styles: []
})
export class CompanysComponent implements OnInit {
  columns: TableData[] = [
    { title: 'Image', value: 'logo', image:true},
    { title: 'Name', value: 'name', sortable:true },
  
    { title: 'Status', value: 'status', bool: true, boolText:{yes: 'Active', no: 'In-Active'} },
  ]
  company: Observable<Company[]>;
  @Input() deleteMessage = 'Do you wish to delete this';
  @Input() deleteItemName = 'Row'
  constructor(private modalService: BsModalService, private store: Store<any>,private dialogService: DialogsService) { }

  ngOnInit() {
    this.store.dispatch(loadCompanys());
    this.company = this.store.select(selectAllCompanys);
  }

  onCreate() {
    const initialState = { 
      title: 'Add',
      imageurl: 'assets/img/demo/upload.png'
     };
    this.modalService.show(CompanyFormComponent, { initialState, class: 'modal-lg' });
  }

  onEdit(company: Company) {
    const initialState = { 
      company, 
      title: 'Update',
      imageurl: company.logo
     };
    this.modalService.show(CompanyFormComponent, { initialState, class: 'modal-lg' });
  }

  async ondelete(id:Company){
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
      this.store.dispatch(deleteCompany({data: id}))
    }
    }


}
