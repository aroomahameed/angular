import { selectCurrentMaterialseason,loadMaterialseasons,deleteMaterialseason,selectseasonBymaterialID, Materialseason } from './../../store/merchandise/materialseason';
import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SeasonFromComponent } from './season-from/season-from.component';
import { Store } from '@ngrx/store';


@Component({
  selector: 'smart-materialseasons',
  templateUrl: './materialseasons.component.html',
  styles: []
})
export class MaterialseasonsComponent implements OnInit {
 
  columns: TableData[] = [
    { title: 'Season', value: ['season', 'name'], sortable:true },
    { title: 'Currency', value: ['currency', 'name'], sortable:true },
    { title: 'Season Price', value: 'season_price', sortable:true,money:true },
    { title: 'Status', value: 'status', bool: true, boolText:{yes: 'Active', no: 'In-Active'} },

  ]
  @Input() matId
  materialseason: Observable<Materialseason[]>;
  constructor(private modalService: BsModalService, private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch( loadMaterialseasons());
    
    this.materialseason = this.store.select(selectseasonBymaterialID, this.matId)
  }

  onCreate() {
    const initialState = { 
      title: 'Add',
      material: this.matId
     };
    this.modalService.show(SeasonFromComponent, { initialState, class: 'modal-xm' });
  }

  onEdit(materialseason: Materialseason) {
    const initialState = { 
      materialseason, 
      title: 'Update',
      material: this.matId
     };
    this.modalService.show(SeasonFromComponent, { initialState, class: 'modal-xm' });
  }
  ondelete(id:Materialseason){
    if(confirm("Are you sure to want to delete this row")){
      this.store.dispatch( deleteMaterialseason({data: id}))
    }

  }



}
