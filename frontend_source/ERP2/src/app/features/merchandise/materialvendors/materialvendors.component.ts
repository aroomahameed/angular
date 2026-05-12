import { selectCurrentMaterialvendor,selectBymaterialID, Materialvendor ,loadMaterialvendors,deleteMaterialvendor} from './../../store/merchandise/materialvendor';
import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MaterialvendorFormComponent } from './materialvendor-form/materialvendor-form.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'smart-materialvendors',
  templateUrl: './materialvendors.component.html',
  styles: []
})

export class MaterialvendorsComponent implements OnInit {

  columns: TableData[] = [
    { title: 'Vendor', value: ['vendor', 'name'], sortable:true },
    { title: 'Currency', value: ['currency', 'name'], sortable:true },
    { title: 'Unit Price', value: 'unit_price', sortable:true,money:true },
    { title: 'Status', value: 'status', bool: true, boolText:{yes: 'Active', no: 'In-Active'} },

  ]
  @Input() matId
  materialvendor: Observable<Materialvendor[]>;
  constructor(private modalService: BsModalService, private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch( loadMaterialvendors());
    
    this.materialvendor = this.store.select(selectBymaterialID, this.matId)
  }

  onCreate() {
    const initialState = { 
      title: 'Add',
      material: this.matId
     };
    this.modalService.show(MaterialvendorFormComponent, { initialState, class: 'modal-lg' });
  }

  onEdit(materialvendor: Materialvendor) {
    const initialState = { 
      materialvendor, 
      title: 'Update',
      material: this.matId
     };
    this.modalService.show(MaterialvendorFormComponent, { initialState, class: 'modal-lg' });
  }
  ondelete(id:Materialvendor){
    if(confirm("Are you sure to want to delete this row")){
      this.store.dispatch( deleteMaterialvendor({data: id}))
    }

  }


}
