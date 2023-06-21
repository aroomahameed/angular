import { RowData } from './../../forms/form/form.component';
import { DialogsService } from './../../dialogs/dialogs.service';
import { createAction, props, Store, MemoizedSelector } from '@ngrx/store';
import { CrudPanelFormComponent } from './crud-panel-form/crud-panel-form.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TableData } from './../../custom-tables/table/table.component';
import { Observable } from 'rxjs';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'smart-crud-panel',
  templateUrl: './crud-panel.component.html',
  styleUrls: ['./crud-panel.component.css']
})
export class CrudPanelComponent implements OnInit {

  @Input() title = ''
  @Input() description = ''
  @Input() icon = ''
  @Input() columns: TableData[]
  @Input() selectAllSelector: MemoizedSelector<any, any>;
  @Input() selectCurrent: MemoizedSelector<any, any>;
  @Input() deleteItemName = 'name';
  @Input() deleteMessage = 'Do you wish to delete';
  @Input() form: RowData[]
  @Input() editable = false
  @Input() deleteable = false
  @Input() createNext = false
  @Input() createNextTooltip = ''
  @Input() modalClass = 'modal-xm';
  
  @Input() fullscreenable = false;
  @Output() createNextEvt = new EventEmitter();

  @Input() itemName = '';
  pluralItemName = '';

  selectAllAction: string;
  selectCurrentAction: string;
  createAction: string;
  deleteAction: string;
  items: Observable<any>
  _formTitle: string;



  constructor(private modalService: BsModalService, private store: Store<any>, private dialogService: DialogsService) { }

  ngOnInit() {
    this.pluralItemName = this.itemName.endsWith('y') ? this.itemName.substr(0, this.itemName.length - 1).concat('ies') : this.itemName.concat('s')
    this.selectAllAction = `[${this.itemName}/API] Load ${this.pluralItemName}`;
    this.selectCurrentAction = `[${this.itemName}/API] Select Current ${this.itemName}`
    this.createAction = `[${this.itemName}/API] Add ${this.itemName}`
    this.deleteAction = `[${this.itemName}/API] Delete ${this.itemName}`
    const action = createAction(
      this.selectAllAction
    );
    this.store.dispatch(action())
    this.items = this.store.select(this.selectAllSelector);
  }

  onCreate(){
    const action = createAction(
      this.selectCurrentAction,
      props<{data: any}>()
    );
    this.store.dispatch(action({data: null}))
    this.addFormID();
    this.form = this.form.map(element => {
      element.row.forEach(data => {
        if(data.type === 'check' || data.type ==='checkbox'){
          data.value = false
        }else{
          data.value = null
        }
      })
      return element
    })
    this._formTitle = `Add ${this.itemName}`
  //  console.log(action.type)
    this.modalService.show(CrudPanelFormComponent, {
      initialState: {
        action: this.createAction, 
        form: this.form, 
        title: this._formTitle,
        current: this.selectCurrent,
        selectCurrentAction: this.selectCurrentAction
      }, class: this.modalClass,
    })
  }

  async onDelete(event){
    const result = await this.dialogService.confirm({
      title: `<i class='fal fa-times-circle text-danger mr-2'></i>
      ${this.deleteMessage} <span class='fw-500'>&nbsp;'${event[this.deleteItemName]}'&nbsp;</span>?`,
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
      const action = createAction(
        this.deleteAction,
        props<{data: any}>()
      );
      this.store.dispatch(action({data: event}))
    }
  }

  onEdit(event){
    
    this.addFormID();


    const keys = Object.keys(event)
    this.form.forEach(element => {
      element.row.forEach(data => {
        keys.forEach(key => {
          if(key === data.name){
            data['value'] = event[key]
          }
        })
      });
    });
   // console.log(this.form)
    this._formTitle = `Edit ${this.itemName}`
    this.modalService.show(CrudPanelFormComponent, {
      initialState: {
        action: this.createAction, 
        form: this.form, 
        title: this._formTitle,
        current: this.selectCurrent,
        selectCurrentAction: this.selectCurrentAction
      }, class: this.modalClass
    })
  }

  private addFormID(){
    let found = false;
    this.form.forEach(data => {
      data.row.forEach(elm => {
        if(elm.label === 'ID'){
          found = true;
        }
      })
    })

    if(!found){
      this.form.push({row: [{label: 'ID', name: 'id', type:'hidden'}]})
    }
  }

  onCreateNext(item){
    this.createNextEvt.emit(item)
  }
}
