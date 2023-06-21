import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Material,loadMaterials,selectAllMaterials,deleteMaterial } from '../../store/merchandise/material';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MaterialFormComponent } from './material-form/material-form.component';
import { Store } from '@ngrx/store';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { DialogsService } from '../../../shared/dialogs/dialogs.service';

@Component({
  selector: 'smart-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {
  columns: TableData[] = [
    { title: 'Image', value: 'image', image:true},
    { title: 'Name', value: 'name', sortable:true },
    { title: 'Sub Category', value:[ 'sub_category','name'],sortable:true  },
    { title: 'Barcode', value: 'barcode',sortable:true  },
    { title: 'HS Code', value: 'hs_code',sortable:true  },
    { title: 'Unit Price', value: 'unit_price',sortable:true ,money:true },
    { title: 'UOM', value: ['sale_uom', 'name'],sortable:true  },
    { title: 'Status', value: 'status', bool: true, boolText:{yes: 'Active', no: 'In-Active'} },
  ]
  materials: Observable<Material[]>;
  @Input() deleteMessage = 'Do you wish to delete this';
  @Input() deleteItemName = 'Row'
  constructor(private modalService: BsModalService, private store: Store<any>,private dialogService: DialogsService) { }

  ngOnInit() {
    this.store.dispatch(loadMaterials());
    this.materials = this.store.select(selectAllMaterials);
  }

  onCreate() {
    const initialState = { 
      title: 'Add',
      imageurl: 'assets/img/demo/upload.png'
     };
    this.modalService.show(MaterialFormComponent, { initialState, class: 'modal-lg' });
  }

  onEdit(materials: Material) {
    const initialState = { 
      materials, 
      title: 'Update',
      imageurl: materials.image
     };
    this.modalService.show(MaterialFormComponent, { initialState, class: 'modal-lg' });
  }

  async ondelete(id:Material){
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
      this.store.dispatch(deleteMaterial({data: id}))
    }
    }

}
